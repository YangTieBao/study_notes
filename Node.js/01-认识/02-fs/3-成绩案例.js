var fs = require('fs')
fs.readFile('成绩读取.txt','utf8',(err,dataStr)=>{
    if(err){
        return console.log('文件读取失败！'+err.message)
    }

    var arrOld = dataStr.split(' ')
    var arrNew = []
    arrOld.forEach(element => {
        arrNew.push(element.replace('=',':'))
    });
    var str = arrNew.join('\r\n')
    fs.writeFile('成绩写入.txt',str,(err)=>{
        if(err){
            return console.log('文件写入失败！'+err.message)
        }
        console.log('文件写入成功！')
    })
})