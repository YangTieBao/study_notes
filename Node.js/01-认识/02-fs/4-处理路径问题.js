/*
    路径动态拼接问题：
        在使用fs模块操作文件时，如果提供的充斥着路径是以./或../开头的相对路径时，很容易出现该问题。
    原因：
        代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径。
    解决办法：
        1.在使用fs模块操作文件时，直接提供完整的路径
        2.使用__dirname
*/

// var fs = require('fs')
// fs.readFile('index.txt','utf8',(err,dataStr)=>{
//     if(err){
//         return console.log("文件读取失败！"+err.message)
//     }
//     console.log('文件读取成功！')
// })

//移植性差，不利于维护
// var fs = require('fs')
// fs.readFile('D:\\杨铁宝\\HTML+CSS+JS\\Node.js\\02-fs\\index.txt','utf8',(err,dataStr)=>{
//     if(err){
//         return console.log("文件读取失败！"+err.message)
//     }
//     console.log('文件读取成功！')
// })

//表示文件当前所处的目录，且+后面的路径前要加‘/’
console.log(__dirname)
var fs = require('fs')
fs.readFile(__dirname+'/index.txt','utf8',(err,dataStr)=>{
    if(err){
        return console.log("文件读取失败！"+err.message)
    }
    console.log('文件读取成功！')
})