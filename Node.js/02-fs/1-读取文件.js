/*
    fs.readFile(path,[options],callback)方法，用来读取指定文件中的内容
        a.参数1：必选参数，字符串，表示文件路径
        b.参数2：可选参数，表示以什么编码格式来读取文件
        c.参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果(err与dataStr)
*/

//导入 fs 模块，进行文件操作
var fs = require('fs')
fs.readFile('index.txt', 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log("文件读取失败！" + err.message)
    }
    console.log("文件读取成功！" + dataStr)
    console.log("成功时err的结果:" + err)
})

const data = fs.readFileSync('index.txt', 'utf-8')
console.log(data)