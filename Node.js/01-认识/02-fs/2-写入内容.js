/*
    fs.writeFile(file,data,[options],callback)方法，用来向指定的文件中写入内容
        a.参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
        b.参数2：必选参数，表示要写入的内容
        c.参数3：可选参数，表示以什么格式写入文件内容，默认值时utf8
        d.参数4：必选参数，文件写入完成之后的回调函数
    
    注意：当当前文件没有，会自动帮你创建该文件
*/

var fs = require('fs')
fs.writeFile('./index0.txt','Hello Node.js!',function(err){
    if(err){
        return console.log("文件写入失败！"+err.message)
    }
    console.log("文件写入成功！")
})