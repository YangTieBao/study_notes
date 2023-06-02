/*
    正则提取需要的内容：
        regStyle = /<style><\/style>/
        regScript = /<script><\/script>/
    
    \s =>表示空白字符
    \S =>表示非空白字符
    * =>表示匹配任意次

    exec()方法用于检索字符串中的正则表达式的匹配
        返回值：返回一个数组，其中存放匹配的结果；若未找到，则返回null
                且次数组的第0个元素与正则表达式相匹配的文件
*/

var regStyle = /<style>[\s\S]*<\/style>/
var regScript = /<script>[\s\S]*<\/script>/

const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname,'./案例.html'),'utf8',(err,dataStr)=>{
    if(err){
        return console.log('读取失败！'+err.message)
    }
    console.log('读取成功！')
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(dataCSS){
    var r1 = regStyle.exec(dataCSS)
    var newCSS = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./案例/index.css'),newCSS,(err)=>{
        if(err){
            return console.log('CSS文件写入失败！'+err.message)
        }
        console.log('CSS文件写入成功！')
    })
}

function resolveJS(dataJS){
    var r2 = regScript.exec(dataJS)
    var newJS = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./案例/index.js'),newJS,(err)=>{
        if(err){
            return console.log('JS文件写入失败！'+err.message)
        }
        console.log('JS文件写入成功！')
    })
}

function resolveHTML(dataHTML){
    var newHTML = dataHTML.replace(regStyle,'<link href="index.css" rel="stylesheet">').replace(regScript,'<script src="index.js"></script>')
    fs.writeFile(path.join(__dirname,'./案例/index.html'),newHTML,(err)=>{
        if(err){
            return console.log('HTML文件写入失败！'+err.message)
        }
        console.log('HTML文件写入成功！')
    })
}