import { Component } from "react";

//这是样式的模板化，css文件名需要加module
import hello from './index.module.css'

export default class Hello extends Component {
    render(){
        return (
            <div className={hello.hello}>Hello,react!</div>
        )
    }
}