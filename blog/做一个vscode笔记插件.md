# vscode-note-manager

give me a demo about developing a vscode extension include follow function:

## Function points

- Explorer
  - [ ] select and show a doc with a view name note-manger, height 200px
  - [ ] shortcut key(option + command + N)
- Activity Bar
  - [ ] File directory tree
  - [ ] Select multi file/folder
  - [ ] Add folder/file
  - [ ] Delete folder/file
- Editor
  - [ ] Rich text(tinymce)/Plain text

选择文件夹/文件，并筛选其中的文本文件和图片，并存在本地

```js
// 自定义文件树结构
type IFileItem = {
  path: string
  isFolder: boolean
  children: IFileItem[]
}

// vscode 文件数据结构
type FileItem =  {
  collapsibleState: 0,
  label: 'code-frament.md',
  data: '/Users/fanghaoming/Documents/docs/code-frament.md',
  resourceUri: Zo {
    scheme: 'file',
    authority: '',
    path: '/Users/fanghaoming/Documents/docs/code-frament.md',
    query: '',
    fragment: '',
    _formatted: null,
    _fsPath: null
  },
  command: {
    command: 'fileTreeExplorer.itemClicked',
    title: 'Item Clicked',
    arguments: [ [Circular *1] ]
  },
  iconPath: sr { id: 'file', color: undefined }
}
```

[发布页](https://marketplace.visualstudio.com/manage/publishers/vscode-note-manager)

[vscode icon](https://code.visualstudio.com/api/references/icons-in-labels)
