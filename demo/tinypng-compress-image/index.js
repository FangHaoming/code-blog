const { execSync } = require('child_process');
const tinify = require("tinify");
const MAX_FREE_COUNT = 500

const apiKeyList = [
  'ScZkKjbrk7kwdtdnFHCkVHl33WxQl64B'
]

// Untracked files 读取未缓存的文件
// const diffOutput = execSync('git ls-files --others --exclude-standard').toString();
// const filePaths = diffOutput.trim().split('\n');
// tracked files 读取缓存区的文件
const diffOutput = execSync('git diff --staged --diff-filter=ACMR --name-only -z').toString();
const filePaths = diffOutput.trim().split('\x00');

const imgFilePathList = filePaths.filter(item => /\.(jpg|png|gif)$/i.test(item))
console.log('图片路径：', imgFilePathList);

const compressImage = async (preKeyIndex = -1, keyIndex = 0, fileIndex = 0) => {
  const key = apiKeyList[keyIndex]
  const path = imgFilePathList[fileIndex]
  if (!key || !path) return
  if (preKeyIndex !== keyIndex) {
    preKeyIndex = keyIndex
    tinify.key = key
    await tinify.validate()
  }
  const compressedCount = tinify.compressionCount || 0
  const source = tinify.fromFile(path);
  if (compressedCount + fileIndex + 1 < MAX_FREE_COUNT) {
    source.toFile(path);
    fileIndex++
    console.log(`[${fileIndex}/${imgFilePathList.length}]已压缩:${path}`)
  } else {
    preKeyIndex = keyIndex
    keyIndex++
  }
  compressImage(preKeyIndex, keyIndex, fileIndex)
}

compressImage()