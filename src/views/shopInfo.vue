<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="content">
      <div class="container-xl">
        <div class="row">
          <div class="col-6">
            <div class="productImage"></div>
          </div>
          <div class="col-6">
            <div class="producDetail">
              <h4>Ducky One 2 Mini RGB LED 60% Double Shot PBT Mechanical Keyboard</h4>
              <div class="tagBox">
                <div class="appraise float-left">
                  <i class="fa fa-thumbs-o-up" style="color:white;">&nbsp20</i>
                </div>
                <div class="appraise float-left">
                  <i class="fa fa-commenting-o" style="color:white;">&nbsp20</i>
                </div>
              </div>
              <div class="productPrice">¥66.00</div>
              <div class="detailBtn">
                <p>查看详情参数</p>
              </div>
              <div class="dropdownBox">
                <div>
                  折射率：
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle refractivity"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Dropdown link</a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div>
                  类&nbsp&nbsp&nbsp型：
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle refractivity"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Dropdown link</a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="number">
                数&nbsp&nbsp&nbsp量：
                <input type="text" class="form-control numberText" />
              </div>
              <div class="commit">
                <button type="button" class="commitBtn btn btn-danger btn-lg rounded-pill">添加订单</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productDetail">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-delailValue-tab"
            data-toggle="tab"
            href="#nav-delailValue"
            role="tab"
            aria-controls="nav-delailValue"
            aria-selected="true"
          >参数</a>
          <a
            class="nav-item nav-link"
            id="nav-comment-tab"
            data-toggle="tab"
            href="#nav-comment"
            role="tab"
            aria-controls="nav-comment"
            aria-selected="false"
          >评论</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-delailValue"
          role="tabpanel"
          aria-labelledby="nav-delailValue-tab"
        >
          <div class="container-xl">1</div>
        </div>

        <div
          class="tab-pane fade"
          id="nav-comment"
          role="tabpanel"
          aria-labelledby="nav-comment-tab"
        >
          <div class="container-xl">
            <ul class="commentList">
              <li>
                <div class="commentBox">
                  <div class="title">
                    <p class="float-left name">
                      用户名称 -
                      <span style="color:">2020-3-8</span>
                    </p>
                    <rate class="float-right" score="4.5" disabled></rate>
                  </div>
                  <div class="commentContent">
                    <p>These keycaps look nice and a bit darker in person. However, since the whole set is missing the 1.75u shift keycap, I can't use them on my ALT keyboard :(</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="commentBox">
                  <div class="title">
                    <p class="float-left name">
                      用户名称 -
                      <span style="color:">2020-3-8</span>
                    </p>
                    <rate class="float-right" score="4.5" disabled></rate>
                  </div>
                  <div class="commentContent">
                    <p>These keycaps look nice and a bit darker in person. However, since the whole set is missing the 1.75u shift keycap, I can't use them on my ALT keyboard :(</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="commentBox">
                  <div class="title">
                    <p class="float-left name">
                      用户名称 -
                      <span style="color:">2020-3-8</span>
                    </p>
                    <rate class="float-right" score="4.5" disabled></rate>
                  </div>
                  <div class="commentContent">
                    <p>These keycaps look nice and a bit darker in person. However, since the whole set is missing the 1.75u shift keycap, I can't use them on my ALT keyboard :(</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rate from "@/components/rate.vue";
export default {
  data() {
    return {};
  },
  components: {
    rate: rate
  }
};
</script>
<style scoped lang="scss">
.content {
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 48px;
}
.row {
  > div {
    height: 620px;
    border: 1px solid black;
  }
}
.producDetail {
  height: 100%;
  width: 100%;
  padding: 35px;
  background-color: #f5f5f5;
  border-radius: 10px;
  > h4 {
    font-size: 18px;
    font-weight: bold;
    color: #484848;
  }
}
.tagBox {
  height: 30px;
  margin-bottom: 40px;
  > div {
    background: #fe6200;
    width: 60px;
    border-radius: 20px;
    text-align: center;
    height: 100%;
    line-height: 30px;
    margin-right: 10px;
  }
}
.productPrice {
  font-size: 35px;
  color: #fe6200;
  margin-bottom: 20px;
}
.detailBtn {
  color: #e65200;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
}
.detailBtn:hover {
  color: #b33e00;
}
.dropdownBox {
  width: 100%;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
    display: flex;
    line-height: 38px;
  }
}
.refractivity {
  width: 300px;
  background-color: white;
  color: black;
}
.dropdown-menu {
  width: 300px;
}
.number {
  height: 40px;
  line-height: 40px;
  > input {
    width: 50px;
    display: inline;
  }
  margin-bottom: 40px;
}
.commitBtn {
  width: 200px;
}
.productDetail {
  height: 400px;
}
.nav-tabs {
  display: flex;
  justify-content: center;
  > .nav-item {
    color: #919191;
  }
  > .active {
    color: black;
    background: #f5f5f5;
    border-bottom: #f5f5f5;
  }
}
.tab-pane {
  background: #f5f5f5;
}
#nav-comment {
  height: 500px;
}
.commentList {
  width: 100%;
  > li {
    box-sizing: border-box;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}
.title {
  margin-bottom: 15px;
  height: 24px;
}
.commentBox {
  color: #656565;
  font-size: 14px;
  p {
    margin-bottom: 0px;
  }
}
</style>