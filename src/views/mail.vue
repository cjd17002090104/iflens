<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeTime: 5
    };
  },
  mounted() {
    let that = this;
    this.$http
      .post(this.$api.emailValidation, {
        activity_token: this.$route.params.activity_token
      })
      .then(res => {
        if (res.status == 200) {
          if (res.type == 1) {
            layer.msg("token已过期,已为您发送新邮件", function() {
              layer.msg("页面将在" + that.closeTime + "秒后关闭");
              that.closePage();
            });
          } else if (res.type == 2) {
            setTimeout(function() {
              layer.msg("页面将在" + that.closeTime + "秒后跳转至首页");
              that.closePage();
            }, 3000);
          }
        }
      });
  },
  methods: {
    closePage() {
      if (this.closeTime > 0) {
        this.closeTime--;
        setTimeout(this.closePage, 1000);
      } else {
        this.$router.push({ name: "index" });
      }
    }
  }
};
</script>
<style scoped lang='scss'>
</style>