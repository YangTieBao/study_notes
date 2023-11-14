import React,{Component} from "react";
import axios from 'axios'

export default class App extends Component{
    /*
        配置代理：就是访问的地址是该前端的自带服务器地址（前缀），先会找自带服务器的后缀地址，
        如有，则返回自带服务器中的内容（基本上是public文件），如没有，则会进行找配置代理设置的地址，
        进行对服务器的访问。

        1.在package.json的文件中配置代理(只能访问一个服务器的地址) =>"proxy":"http://127.0.0.1:5000"
        2.在src中写一个配置代理的文件（可以访问多个多个地址）
    */

    requestStu = ()=>{
        axios.get(`/api1/student`).then(
            res=>{
                console.log('请求成功',res.data)
            },
            err=>{
                console.log('请求失败',err)
            }
        )
    }

    requestCar = ()=>{
        axios.get(`/api2/car`).then(
            res=>{
                console.log('请求成功',res.data)
            },
            err=>{
                console.log('请求失败',err)
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.requestStu}>请求访问学生的信息</button>
                <button onClick={this.requestCar}>请求访问车辆的信息</button>
            </div>
        )
    }
}