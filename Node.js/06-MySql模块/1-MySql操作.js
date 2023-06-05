/**
    在项目中操作数据库的步骤
        1.安装操作 MySql 数据库的第三方模块
        2.通过 MySql 模块连接到 MySql 数据库
        3.通过 MySQL 模块执行 SQL 语句
    安装 MySQL 模块
        npm install mysql
    配置 MySQL 模块
        const mysql = require('mysql')
        建立与MySQL数据库的连接
            const db = mysql.createPool({
                host:'127.0.0.1',
                user:'root',
                password:'admin123',
                database:'my_db_01' --->指定要操作哪个数据库
            })
 */
const mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'ytb@2003',
    database:'project01' //--->指定要操作哪个数据库
})
//检测 MySQL 模块能否正常工作
// db.query('SELECT 1',(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     //只要能打印出 [ RowDataPacket {'1':1}]的结果，就证明数据库连接正常
//     console.log(results)
// })


//查询数据
// const table_pro01 = 'select * from pro01_table'
// db.query(table_pro01,(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     //results 是一个数组
//     console.log(results)
// })

//插入数据
    // const user = {id:20,name:"zs",gender:"男",age:28,birthday:"2003-05-30"}
    // ? 占位符表示对一个值的占位
    // const sqlStr = "insert into pro01_table values(?,?,?,?,?)"
    // db.query(sqlStr,[user.id,user.name,user.age,user.gender,user.birthday],(err,results)=>{
    //     if(err){
    //         return console.log(err.message)
    //     }
    //     //执行的是插入语句，则 results 是一个对象
    //     //可以通过 affectedRows 属性，来判断是否插入数据成功
    //     if(results.affectedRows === 1){
    //         console.log('插入数据成功！')
    //     }
    // })
    // 插入数据的便捷方式
    // const user1 = {id:21,name:"ls",gender:"男",age:32,birthday:"1998-06-11"}
    // const sqlStr = "insert into pro01_table set ?"
    // db.query(sqlStr,user1,(err,results)=>{
    //     if(err){
    //         return console.log(err.message)
    //     }
    //     //执行的是插入语句，则 results 是一个对象
    //     //可以通过 affectedRows 属性，来判断是否插入数据成功
    //     if(results.affectedRows === 1){
    //         console.log('插入数据成功！')
    //     }
    // })
