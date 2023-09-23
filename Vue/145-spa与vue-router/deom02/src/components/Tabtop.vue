<template>
    <header>
        <ul>
            <li>
                <router-link to="/center/enter" active-class="hello">
                    <span>进入</span>
                </router-link>
            </li>
            <li>
                <router-link to="/center/exit" active-class="hello">
                    <span>退出</span>
                </router-link>
            </li>
        </ul>
    </header>
</template>
<style lang="scss" scoped>
.hello{
    color:green;
}
header{
    position:sticky;
    top:0px;
    background: white;
    width:100%;
    height:60px;
    ul{
        display: flex;
        height:100%;
        width:100%;
        li{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            span{
                border-bottom:1px solid white; 
            }
        }
    }
}
</style>
