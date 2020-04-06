<template>
  <div>
    <headTop></headTop>
    <div class="top-content">
      <div class="inner-bg">
        <div class="container">
          <div class="row" v-if="formState==1">
            <div class="col-sm-8 col-sm-offset-2 text" style="text-align:center">
              <h1>
                <strong>Bootstrap</strong> Login Form
              </h1>
              <div class="description">
                <p>
                  This is a free responsive login form made with Bootstrap.
                  Download it on
                  <a
                    href="#"
                  >
                    <strong>AZMIND</strong>
                  </a>, customize and use it as you like!
                </p>
              </div>
            </div>
          </div>
          <div class="row" v-if="formState==1">
            <div class="col-sm-6 col-sm-offset-3 form-box">
              <div class="form-top">
                <div class="form-top-left">
                  <h3>Login to our site</h3>
                  <p>Enter your username and password to log on:</p>
                </div>
                <div class="form-top-right">
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    id="signUpBtn"
                    @click="changeForm(0)"
                  >注 册</button>
                </div>
              </div>
              <div class="form-bottom">
                <form role="form" action method="post" class="signUpform">
                  <div class="form-group">
                    <input
                      type="text"
                      name="form-email"
                      placeholder="邮箱"
                      class="form-email form-control"
                      id="form-email"
                      v-model="userLogin.email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="form-password"
                      placeholder="密码"
                      class="form-password form-control"
                      id="form-password"
                      v-model="userLogin.password"
                    />
                  </div>
                  <a class="btn" id="loginBtn" @click="login()">登 录</a>
                </form>
              </div>
            </div>
          </div>
          <!-- /*注册表单*/ -->
          <div class="row" v-else id="sinUpFrom">
            <div class="col-sm-6 col-sm-offset-3 form-box">
              <div class="form-top">
                <div class="form-top-left">
                  <h3>注册成为我们的用户</h3>
                  <p>输入您的账户信息以创建新的账户</p>
                </div>
                <div class="form-top-right">
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    id="signUpBtn"
                    @click="changeForm(1)"
                  >返回登录</button>
                </div>
              </div>
              <div class="form-bottom">
                <form role="form" action method="post" class="signUp-form">
                  <div class="form-group">
                    <input
                      type="text"
                      name="form-username"
                      placeholder="用户名"
                      class="form-username form-control"
                      id="form-username"
                      v-model="userRegister.name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="form-password"
                      placeholder="密码（6-16个字符组成，区分大小写）"
                      class="form-password form-control"
                      id="form-password"
                      v-model="userRegister.password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="form-password"
                      placeholder="填写常用邮箱 "
                      class="form-password form-control"
                      id="form-password"
                      v-model="userRegister.email"
                    />
                  </div>
                  <div class="form-group input-group">
                    <input
                      type="text"
                      name="form-username"
                      placeholder="验证码"
                      class="form-username form-control"
                      id="form-username"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        style="width:200px"
                      >Button</button>
                    </div>
                  </div>
                  <a class="btn" id="loginBtn" @click="register()">注 册</a>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3 social-login">
              <h3>...or login with:</h3>
              <div class="social-login-buttons" style="text-align:center">
                <a class="btn btn-link-2" href="#">
                  <i class="fa fa-facebook"></i> Facebook
                </a>
                <a class="btn btn-link-2" href="#">
                  <i class="fa fa-twitter"></i> Twitter
                </a>
                <a class="btn btn-link-2" href="#">
                  <i class="fa fa-google-plus"></i> Google Plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { default as Message } from "sweetalert2";
import qs from "qs";
export default {
  data() {
    return {
      /*1:login,2:sin up*/
      formState: 1,
      userLogin: {
        email: "1440963706@qq.com",
        password: "cjd2877096"
      },
      userRegister: {
        name: "123123",
        email: "14409637@qq.com",
        password: "cjd123123"
      }
    };
  },
  methods: {
    changeForm(formState) {
      this.formState = formState;
    },

    login() {
      let data = this.userLogin;
      //判空
      if (!this.dataIsEmpty(this.userLogin)) {
        return false;
      }

      this.$http.post(this.$api.login, data).then(res => {
        if (res.status == 200) {
          //成功后将jwt token 存入localstorage
          localStorage.JWT_TOKEN = res.token;
          this.getAuth();
        }
      });
    },
    //获取用户信息存入vuex
    getAuth() {
      //发送token
      this.$http.post(this.$api.getAuth).then(res => {
        if (res.status == 200) {
          //存入localstorage
          localStorage.user = JSON.stringify(res.user);
          //存入vuex
          this.$store.commit("setUser", this.$url);
        }
      });
    },
    register() {
      let data = this.userRegister;

      if (!this.dataIsEmpty(this.userRegister)) {
        return false;
      }

      this.$http.post(this.$api.register, data).then(res => {
        if (res.status == 200) {
          localStorage.JWT_TOKEN = res.token;
          this.getAuth();
        }
      });
    },
    //数据非空验证
    dataIsEmpty(data) {
      for (let i in data) {
        if (data[i] == "") {
          layer.msg(i + "不能为空", { icon: 2 });
          return false;
        }
      }
      return true;
    }
  },
  mounted() {
    //设置body背景
    if (this.$route.params.formState) {
      this.formState = this.$route.params.formState;
    }
    $("body").css({
      background:
        "url(" + require("@/assets/images/login_bg.jpg") + ")" + " no-repeat",
      "background-size": "100% 100%",
      "background-attachment": "fixed",
      overflow: "hidden"
    });
  },
  //去除 body背景
  beforeDestroy() {
    $("body").removeAttr("style");
  }
};
</script>
<style scoped>
.signUp-form > .form-group {
  margin-bottom: 45px;
}
#signUpBtn {
  float: right;
}
#signUpBtn:hover {
  color: white;
  opacity: 1;
}
.btn-outline-primary {
  margin-top: 10px;
}
.row {
  justify-content: center;
}
.text {
  color: #fff;
  float: left;
  line-height: 50px;
}
input[type="text"],
input[type="password"],
textarea,
textarea.form-control {
  height: 50px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #fff;
  border: 3px solid #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #888;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

textarea,
textarea.form-control {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 30px;
}

input[type="text"]:focus,
input[type="password"]:focus,
textarea:focus,
textarea.form-control:focus {
  outline: 0;
  background: #fff;
  border: 3px solid #fff;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

input[type="text"]:-moz-placeholder,
input[type="password"]:-moz-placeholder,
textarea:-moz-placeholder,
textarea.form-control:-moz-placeholder {
  color: #888;
}

input[type="text"]:-ms-input-placeholder,
input[type="password"]:-ms-input-placeholder,
textarea:-ms-input-placeholder,
textarea.form-control:-ms-input-placeholder {
  color: #888;
}

input[type="text"]::-webkit-input-placeholder,
input[type="password"]::-webkit-input-placeholder,
textarea::-webkit-input-placeholder,
textarea.form-control::-webkit-input-placeholder {
  color: #888;
}

#loginBtn {
  height: 50px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #de615e;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

#loginBtn:hover {
  opacity: 0.6;
  color: #fff;
}

#loginBtn:active {
  outline: 0;
  opacity: 0.6;
  color: #fff;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#loginBtn:focus {
  outline: 0;
  opacity: 0.6;
  background: #de615e;
  color: #fff;
}

#loginBtn:active:focus,
#loginBtn.active:focus {
  outline: 0;
  opacity: 0.6;
  background: #de615e;
  color: #fff;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #888;
  line-height: 30px;
  text-align: center;
}

strong {
  font-weight: 500;
}

a,
a:hover,
a:focus {
  color: #de615e;
  text-decoration: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

h1,
h2 {
  margin-top: 10px;
  font-size: 38px;
  font-weight: 100;
  color: #555;
  line-height: 50px;
}

h3 {
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 30px;
}

img {
  max-width: 100%;
}

/* ::-moz-selection {
  background: #de615e;
  color: #fff;
  text-shadow: none;
}
::selection {
  background: #de615e;
  color: #fff;
  text-shadow: none;
} */

.btn-link-1 {
  display: inline-block;
  height: 50px;
  margin: 5px;
  padding: 16px 20px 0 20px;
  background: #de615e;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.btn-link-1:hover,
.btn-link-1:focus,
.btn-link-1:active {
  outline: 0;
  opacity: 0.6;
  color: #fff;
}

.btn-link-1.btn-link-1-facebook {
  background: #4862a3;
}
.btn-link-1.btn-link-1-twitter {
  background: #55acee;
}
.btn-link-1.btn-link-1-google-plus {
  background: #dd4b39;
}

.btn-link-1 i {
  padding-right: 5px;
  vertical-align: middle;
  font-size: 20px;
  line-height: 20px;
}

.btn-link-2 {
  display: inline-block;
  height: 50px;
  margin: 5px;
  padding: 15px 20px 0 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.btn-link-2:hover,
.btn-link-2:focus,
.btn-link-2:active,
.btn-link-2:active:focus {
  outline: 0;
  opacity: 0.6;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}

/***** Top content *****/

.inner-bg {
  padding: 80px 0 140px 0;
}

.top-content .text {
  color: #fff;
}

/*body {
  background: url("~assets/images/login_bg.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  overflow: hidden;
}*/

.top-content .text h1 {
  color: #fff;
}

.top-content .description {
  margin: 20px 0 10px 0;
}

.top-content .description p {
  opacity: 0.8;
}

.top-content .description a {
  color: #fff;
}
.top-content .description a:hover,
.top-content .description a:focus {
  border-bottom: 1px dotted #fff;
}

.form-box {
  margin-top: 35px;
}

.form-top {
  overflow: hidden;
  padding: 0 25px 15px 25px;
  background: #444;
  background: rgba(0, 0, 0, 0.7);
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
  text-align: left;
}

.form-top-left {
  float: left;
  width: 75%;
  padding-top: 25px;
}

.form-top-left h3 {
  margin-top: 0;
  color: #fff;
}
.form-top-left p {
  opacity: 0.8;
  color: #fff;
}

.form-top-right {
  float: left;
  width: 25%;
  height: 103px;
  font-size: 66px;
  color: #fff;
  padding-top: 25px;

  /* display: flex;
  flex-direction: row-reverse column-reverse; */
}

.form-bottom {
  padding: 25px 25px 30px 25px;
  background: #444;
  background: rgba(0, 0, 0, 0.6);
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
  text-align: left;
}

.form-bottom form textarea {
  height: 100px;
}

.form-bottom form #loginBtn {
  width: 100%;
}

.form-bottom form .input-error {
  border-color: #de615e;
}

.social-login {
  margin-top: 35px;
}

.social-login h3 {
  color: #fff;
}

.social-login-buttons {
  margin-top: 25px;
}

/***** Media queries *****/

@media (min-width: 992px) and (max-width: 1199px) {
}

@media (min-width: 768px) and (max-width: 991px) {
}

@media (max-width: 767px) {
  .inner-bg {
    padding: 60px 0 110px 0;
  }
}

@media (max-width: 415px) {
  h1,
  h2 {
    font-size: 32px;
  }
}
</style>