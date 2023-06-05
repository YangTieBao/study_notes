const mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'ytb@2003',
    database:'project01'
})

//更新数据
// const user1 = {username:'xiaohei',userage:11,id:1}
// const sqlStr1 = 'update user set username=?,userage=? where id=?'
// db.query(sqlStr1,[user1.username,user1.userage,user1.id],(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     if(results.affectedRows ===1){
//         console.log('数据更新成功！')
//     }
// })
//更新数据的便捷方式
// const user2 = {username:'xiaobai',userage:21,id:2}
// const sqlStr2 = 'update user set ? where id=?'
// db.query(sqlStr2,[user2,user2.id],(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     if(results.affectedRows ===1){
//         console.log('数据更新成功！')
//     }
// }) 

//删除数据  如果 SQL 语句中只有一个占位符，则可以省略数组
// const sqlStr3 = "delete from user where id=?"
// db.query(sqlStr3,2,(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     if(results.affectedRows === 1){
//         console.log('删除成功！')
//     }
// })

// db.query("insert into user values('xiaobai',12,2,0)",(err,resules)=>{
//     if(err){
//         return console.log(err.message)
//     }
// })

/*
    标记删除
        ->使用 delete 语句，会真正的把数据从表中删除掉，为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
          所谓的标记删除，就是在表中设置了类似与 status 这样的状态字段，来标记当前这条数据是否被删除。
          我们并没有执行delete语句把数据删除，而是执行了update语句
*/
db.query("update user set status=1 where id=?",2,(err,results)=>{
    if(err){
        return console.log(err.message)
    }
    if(results.affectedRows === 1){
        console.log('删除成功！')
    }
})
