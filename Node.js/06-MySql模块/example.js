const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
	host:"127.0.0.7",
	user:"root",
	password:"ytb@2003",
	database:"Stu"
})

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/stu/student_counts',(req,res)=>{
	db.query('select * from stu_counts order by date desc',(err,results)=>{
		if(err) throw err;
		res.send(results)
	})
})
app.post('/stu/student_counts',(req,res)=>{
	const {date,male_count,female_count} = req.body
	db.query('insert into stu_counts (date,male_count,female_count) values(?,?,?)',[date,male_count,female_count],(err,results)=>{
		if(err) throw err
		res.send({
			id:results.insertId,
			date,
			male_count,
			female_count
		})
	})
})

app.listen(80,()=>{
	console.log('Express running at http://127.0.0.1')
})