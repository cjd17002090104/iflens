<template>
  <div class="page_nav">
    <div class="container-xl">
      <div class="category">
        <div class="dropdown">
          <div
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style="border-radius:20px;"
          >
            <svg
              class="bi bi-list"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 20 20"
              fill="#ffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 13.5A.5.5 0 015 13h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 9h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span style="letter-spacing:20px;">分类</span>
          </div>
          <div class="dropdown-menu" style="width:270px;">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">Something else here</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0; // remove the gap so it doesn't close
}
@media (min-width: 1200px) {
  .container-xl {
    min-width: 1170px;
    max-width: 1170px;
  }
}
.page_nav {
  background: #46a0ff;
  min-width: 1170px;
  height: 50px;
  padding: 0px;
  .container-xl {
    height: 100%;
    position: relative;
  }
}
.category {
  position: absolute;

  bottom: 0px;
  height: 65px;
  width: 270px;
  min-width: 270px;
  text-align: center;
  line-height: 75px;
  background-color: #484848;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 30px;
  float: left;
  cursor: pointer;
  .dropdown-item {
    height: 50px;
    line-height: 42px;
  }
}
.route {
}
.pages {
  float: left;
  width: 72%;

  li {
    float: left;
    border-right: 1px solid white;
    padding: 0 35px;
    color: white;
  }
}
ul,
li {
  padding: 0;
  margin: 0;
}
ul {
  width: 50%;
}
</style>