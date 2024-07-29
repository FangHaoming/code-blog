
web 服务器可以承载多个域名。这被称为虚拟主机（Virtual Host）。通过配置不同的虚拟主机，同一个服务器可以为多个域名提供服务。每个虚拟主机都使用独立的配置文件，可以设置不同的域名、目录结构、访问权限等。当用户访问某个域名时，web 服务器会根据配置文件的设置将请求发送到对应的虚拟主机上。这样就实现了通过一个服务器为多个域名提供服务的功能。

当多个网站托管在一台服务器上并共享一个IP地址，并且每个网站都有自己的SSL证书，在客户端设备尝试安全地连接到其中一个网站时，服务器可能不知道显示哪个SSL证书。这是因为SSL/TLS握手发生在客户端设备通过HTTP指示连接到某个网站之前。

服务器名称指示 (SNI) 旨在解决此问题。SNI 是 TLS 协议（以前称为 SSL 协议）的扩展，该协议在 HTTPS 中使用。它包含在 TLS/SSL 握手流程中，以确保客户端设备能够看到他们尝试访问的网站的正确 SSL 证书。该扩展使得可以在 TLS 握手期间指定网站的主机名或域名 ，而不是在握手之后打开 HTTP 连接时指定。

```shell
location  /api {
    proxy_ssl_server_name on; #将源域名指定为 example.com
    proxy_pass https://example.com;
}
```

参考

> [记一次 nginx 转发代理 https 出现 502 的情况](https://kebingzao.com/2022/08/16/nginx-502/)
>
> [proxy_ssl_server_name](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_server_name)
> 
> [什么是SNI？TLS服务器名称指示如何工作](https://www.cloudflare.com/zh-cn/learning/ssl/what-is-sni/)