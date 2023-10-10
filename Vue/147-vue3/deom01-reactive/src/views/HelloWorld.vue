<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
</template>
<script>

export default {
  setup() {
    const onSubmit = () => Vant.showToast("点击按钮");
    return {
      onSubmit,
    };
  },
};
</script>