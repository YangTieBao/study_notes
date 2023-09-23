<template>
    <footer>
        <ul>
            <router-link to="/center" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'hello':''">
                    <i class="iconfont icon-shouye"></i>
                    <span>center</span>
                </li>
            </router-link>
            <router-link to="/right" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'hello':''">
                    <i class="iconfont icon-my"></i>
                    <span>right</span>
                </li>
            </router-link>
            <router-link to="/left" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'hello':''">
                    <i class="iconfont icon-tuichu2"></i>
                    <span>left</span>
                </li>
            </router-link>
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
//方法二
@import url('@/assets/iconfont/iconfont.css');
.hello{
    color:red;
}
footer{
    z-index: 100;
    width:100%;
    height:80px;
    position:fixed;
    bottom:0;
    left:0;
    background: white;
    ul{
        height:100%;
        display: flex;
        text-align: center;
        line-height: 40px;
        border:1px solid grey;
        li{
            display: flex;
            flex-direction: column;
            flex:1;
            i{
                font-size:25px;
                flex:1;
            }
            span{
                flex:1;
                font-size: 20px;
            }
        }
    }
}
</style>
