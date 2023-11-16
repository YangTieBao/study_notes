import PubSub from "pubsub-js";
import React, { Component } from 'react';

export default class Hello extends Component {

    transData = () => {
        PubSub.publish("change", "我是Welcome组件传过来的消息");
    }

    render() {
        return (
            <div>
                <div>我是Welcome组件</div>
                <button onClick={this.transData}>传消息给Hello组件</button>
            </div>
        )
    }
}
