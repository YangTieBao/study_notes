import React,{Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";


export default class App extends Component{
    /*
        通过下载‘ pubsub-js ’包来进行消息的订阅与发布
        订阅：subscribe(订阅主题，(msg,data)=>{
            回调函数})
        发布：publish(发布主题，data)
        
        作用：组件之间的通信
    */
    render(){
        return(
            <div>
                <h1>组件之间的通信</h1>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}