<template>
    <div>
        <i class="iconfont icon-fanhui3" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('@/assets/iconfont/iconfont.css');
    div{
        height:50px;
        line-height: 50px;
        width:100%;
        position: fixed;
        top:0;
        left:0;
        background: white;
        text-align: center;
        z-index: 100;
        font-size: 20px;
        i{
            font-size: 20px;
            position:absolute;
            left:100px;
        }
    }
</style>