<template>
  <div class="search_top">
    <div class="container-xl">
      <div class="logo"></div>
      <div class="search_box">
        <div
          class="input-group input-group-lg"
          style="height:100%; 
                  align-items: center; 
                  width:80% ;
                  font-size:20px"
        >
          <div class="input-group-prepend">
            <button
              id="search_category"
              class="btn btn-outline-light dropdown-toggle border-right-1"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >全部分类</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <input type="text" class="form-control border-left-0" id="search" placeholder="请输入内容..." />
          <div class="input-group-prepend">
            <button class="btn btn-light" type="button" id="search_btn">
              <img src="~assets/icons/search.svg" style="width:25px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
@media (min-width: 1200px) {
  .container-xl {
    max-width: 1170px;
  }
}
.container-xl {
  min-width: 1170px;
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
.about {
  float: right;
}

.nav_btns {
  float: right;
}
.logo {
  height: 100%;
  border: 1px solid black;
  float: left;
  width: 17%;
  margin-right: 100px;
}
.search_top {
  .container-xl {
    height: 100px;
  }
  height: 100px;
  margin-bottom: 20px;
}
.search_box {
  float: left;
  height: 100%;
  width: 59%;
}
#search {
  border: 2px solid #e5e5e5;
  height: 50px;
  font-size: 16px;
}
#search:focus {
  box-shadow: none !important;
  border-color: #e5e5e5;
}
#search_category {
  border-radius: 40px 0px 0px 40px;
  border: 2px solid #e5e5e5;
  font-size: 16px;
  height: 50px;
  width: 170px;
  color: #989898;
}
#search_btn {
  margin-left: -30px;
  background-color: #ced4da;
  border-color: #ced4da;
  border-radius: 50px;
  width: 80px;
  z-index: 99;
  height: 50px;
}
</style>