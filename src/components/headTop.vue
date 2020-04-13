<template>
  <div class="header_top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white" id="top_nav">
      <router-link class="title" :to="{name:'index'}">
        iflens
        <span>-中国最大的线上镜片交易网站</span>
      </router-link>
      <div class="nav_btns">
        <!-- 已登录状态 -->
      </div>
      <ul class="navbar-nav navbar-expand" v-if="userData.isLogin">
        <li class="nav-item">
          <a class="nav-link">
            <img class="userImage" :src="this.$url+userData.user.image.image_url" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{userData.user.name}}</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >我的账户</a>
          <div class="userOperation dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item">
              <router-link :to="{name:'user'}">个人中心</router-link>
            </a>
            <a class="dropdown-item" @click="logout()">退出登录</a>
            <!-- <a class="dropdown-item" href="#"></a> -->
          </div>
        </li>
      </ul>
      <ul class="navbar-nav navbar-expand" v-else v-show="this.$route.name!='login'">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'login'}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'login',params:{formState:2}}">注册</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>
<style scoped lang="scss">
@media (min-width: 1200px) {
  .container-xl {
    max-width: 1170px;
  }
}
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0; // remove the gap so it doesn't close
}

.header_top {
  height: 43px;
  min-width: 1170px;
  border-bottom: 1px solid #e5e5e5;
  background: white;
}
#top_nav {
  width: 1170px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  justify-content: space-between;
}
.title {
  color: #fe6200;
  font-family: "DFKai-SB";
  font-style: italic;
  float: left;
  margin-bottom: 0;
  span {
    color: #a8a9a9;
  }
}
.title:hover {
  text-decoration-line: none;
}

.about {
  float: right;
}
.userImage {
  height: 26px;
  width: 26px;
}
.userOperation {
  width: 50px;
  text-align: center;
}
router-link {
  cursor: pointer;
}
.dropdown-item {
  cursor: pointer;
}
.router-link {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>