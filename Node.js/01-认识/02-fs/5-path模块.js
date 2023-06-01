/*
    path模块：
        path模块是Node.js官方提供的，用来处理路径的模块
    
    path.join([paths])方法，用来将多个路径片段拼接成一个完整的路径
    path.basename(path,ext)方法，用来从路径字符串中，将文件名解析出来
        参数2；解析出来会没有ext扩展名
    path.extname()方法，可以获取路径中的扩展名部分

    注意：../ 会抵消前面的路径
*/
//导入path模块
var path = require('path')
var str1='a/b/c/d/..//e.html'
console.log(path.join(str1,'f/j/k'))
console.log(path.basename(str1))
console.log(path.basename(str1,'.html'))
console.log(path.basename(__dirname+'/index.txt'))
console.log(path.basename(__dirname+'/index.txt','.txt'))
console.log(path.extname(__dirname+'/index.txt'))
var fs = require('fs')
fs.readFile(path.join(__dirname,'./成绩写入.txt'),'utf8',(err,dataStr)=>{
    if(err){
        return console.log('读取失败！'+err.message)
    }
    console.log("读取成功！"+dataStr)
})
