---
date: 2026-06-30
---

# 如何获取免费域名并应用到 GitHub Page

最近把 GitHub Page 绑定到一个免费域名，过程里涉及三个地方：

- 在 DigitalPlat / DPDNS 获取免费域名
- 在 Cloudflare 配置 DNS Records
- 在 GitHub Pages 配置 Custom domain

整体链路是：

```text
用户访问域名 -> Cloudflare DNS 解析 -> GitHub Pages 站点
```

## 获取免费域名

打开：

```text
https://dash.domain.digitalplat.org/
```

在面板里注册一个可用的免费域名。这里假设拿到的域名是：

```text
example.com
```

如果实际拿到的是类似：

```text
fanghaoming.dpdns.org
```

后面的 `example.com` 都替换成自己的域名即可。

拿到域名之后，需要关注它的 Nameservers。如果域名已经配置成 Cloudflare 的 nameserver，例如：

```text
hal.ns.cloudflare.com
daisy.ns.cloudflare.com
```

说明这个域名的 DNS 解析已经交给 Cloudflare 管理。后续 DNS 记录就应该在 Cloudflare 里配置，而不是只在 DigitalPlat 里改。

## 在 Cloudflare 配置 DNS Records

进入 Cloudflare 对应域名的 DNS 页面，先删除自动生成或错误的记录，尤其是指向 Cloudflare 自己 IP 的 A / AAAA 记录。

常见的 Cloudflare IP 长这样：

```text
104.21.x.x
172.67.x.x
2606:4700:...
```

如果把域名解析到这些 IP，再经过 Cloudflare 代理，就容易出现：

```text
Error 1000: DNS points to prohibited IP
```

### 配置根域名

如果 Cloudflare 支持根域名 CNAME flattening，可以这样配置：

```text
Type: CNAME
Name: @
Target: <你的 GitHub 用户名>.github.io
Proxy status: DNS only
TTL: Auto
```

例如：

```text
Type: CNAME
Name: @
Target: fanghaoming.github.io
Proxy status: DNS only
TTL: Auto
```

这里的含义是：

- `CNAME`：把当前域名作为另一个域名的别名
- `@`：表示当前 DNS Zone 的根域名，也就是 `example.com`
- `Target`：指向 GitHub Pages 默认域名
- `DNS only`：Cloudflare 只做 DNS 解析，不代理流量
- `TTL Auto`：缓存时间交给 Cloudflare 自动处理

如果 Cloudflare 不允许给根域名添加 CNAME，可以改用 GitHub Pages 官方的 A 记录：

```text
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: DNS only

Type: A
Name: @
IPv4 address: 185.199.109.153
Proxy status: DNS only

Type: A
Name: @
IPv4 address: 185.199.110.153
Proxy status: DNS only

Type: A
Name: @
IPv4 address: 185.199.111.153
Proxy status: DNS only
```

### 配置 www

`www` 子域名推荐配置成 CNAME：

```text
Type: CNAME
Name: www
Target: <你的 GitHub 用户名>.github.io
Proxy status: DNS only
TTL: Auto
```

例如：

```text
Type: CNAME
Name: www
Target: fanghaoming.github.io
Proxy status: DNS only
TTL: Auto
```

如果想用 A 记录，也可以先通过命令查看 GitHub Pages 当前解析出来的 IPv4：

```shell
ping example.com
```

或者：

```shell
dig example.com A +short
```

然后在 Cloudflare 里添加：

```text
Type: A
Name: www
IPv4 address: ping 或 dig 得到的 GitHub Pages IP
Proxy status: DNS only
TTL: Auto
```

不过这里有一个坑：不要把 `104.21.x.x`、`172.67.x.x` 这类 Cloudflare IP 填进去。它们不是 GitHub Pages 的源站 IP，填了之后可能会触发 Cloudflare Error 1000。

更稳妥的方式是直接让 `www` CNAME 到：

```text
<你的 GitHub 用户名>.github.io
```

## 在 GitHub Pages 配置 Custom domain

打开 GitHub 仓库：

```text
Settings -> Pages
```

找到 Custom domain，填写你的域名：

```text
example.com
```

或者：

```text
www.example.com
```

保存之后，GitHub 会进行 DNS Check。这个过程可能需要等几分钟，DNS 传播慢的时候也可能更久。

如果 GitHub Pages 是从分支发布，GitHub 可能会在发布目录里生成一个 `CNAME` 文件，内容就是你配置的自定义域名：

```text
example.com
```

DNS 检查通过后，再勾选：

```text
Enforce HTTPS
```

如果这个选项暂时不可用，通常是证书还没有签发完成，等一段时间再刷新即可。

## 检查配置

可以用下面的命令检查根域名：

```shell
dig example.com A +short
dig example.com CNAME +short
```

检查 `www`：

```shell
dig www.example.com CNAME +short
dig www.example.com A +short
```

如果配置正确，应该能看到域名最终指向 GitHub Pages，而不是 Cloudflare 自己的 IP。

最后访问：

```text
https://example.com/
```

如果能打开 GitHub Pages 站点，并且 GitHub Pages 后台显示 DNS Check 通过，就说明配置完成。

## 常见问题

### Cloudflare 提示同名记录已存在

如果添加 CNAME 时看到：

```text
An A, AAAA, or CNAME record with that host already exists
```

说明这个 `Name` 已经存在 A、AAAA 或 CNAME 记录。DNS 规则里同一个主机名不能同时存在 CNAME 和 A / AAAA。

处理方式是先删除同名的 A / AAAA 记录，再添加 CNAME。

### 打开网站出现 Error 1000

如果页面显示：

```text
Error 1000: DNS points to prohibited IP
```

通常是 DNS 记录指向了 Cloudflare 自己的 IP。删除这些错误记录，改成指向 GitHub Pages 即可。

### GitHub 一直显示 DNS Check in Progress

常见原因：

- Cloudflare 记录还开着橙色云朵代理
- DNS 记录还没有传播完成
- CNAME / A 记录指向不对
- 同名 A、AAAA、CNAME 记录冲突

排查时优先确认 Cloudflare 里相关记录都是：

```text
Proxy status: DNS only
```

等 GitHub 验证通过之后，再考虑是否开启 Cloudflare 代理。

## 参考

- [GitHub Pages 官方文档：Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
