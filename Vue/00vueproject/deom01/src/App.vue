<template>
  <div>Hello
    <input type="range">
  </div>
</template>
<script>
import io from 'socket.io-client'
export default {
  mounted() {
    // this.connectWS()
    this.connectSocket()
  },
  methods: {
    //这个vue项目没配好，连不起服务器
    // connectWS() {
    //   this.webSocket = new WebSocket(this.URL);
    //   this.webSocket.onopen = () => {
    //     console.log("已连接服务器！");
    //     this.webSocket.send("Hello Server!");
    //   };
    //   this.webSocket.onmessage = (message) => {
    //     console.log("Recevied message from Server:", message.data);
    //   };
    //   this.webSocket.onclose = () => {
    //     console.log("已断开连接！");
    //   };
    //   this.webSocket.onerror = (err) => {
    //     console.log("Error:", err);
    //   };
    // },
    // 这个是可以连起的
    connectSocket(){
      const socket = io('http://127.0.0.1:3000')
				socket.on('connect',()=>{
					console.log('已成功连接！')
				})
				socket.on('server event',(message)=>{
					// if(message instanceof ArrayBuffer){
					// 	let decoder = new TextDecoder('utf-8')
					// 	this.message = decoder.decode(message)
					// }
          let decoder = new TextDecoder('utf-8')
          console.log(decoder.decode(message))
				})
				socket.on('error',(err)=>{
					console.log(err)
				})
				socket.on('disconnect',()=>{
					console.log('disconnect')
				})
    }
  },
};
</script>
<style lang="scss">
div {
  width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
  font-size: 40px;
  margin: 200px auto;
  background: yellow;
}
</style>
