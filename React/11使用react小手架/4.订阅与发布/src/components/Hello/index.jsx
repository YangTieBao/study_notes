import PubSub from "pubsub-js";
import React, { Component } from 'react';

export default class Hello extends Component {

    componentDidMount() {
        PubSub.subscribe("change", (msg, data) => {
            console.log("我是Hello组件接收到的消息", msg, data);
        })
    }

    render() {
        return (
            <div>我是Hello组件</div>
        )
    }
}
