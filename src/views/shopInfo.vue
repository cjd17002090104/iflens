<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="content">
      <div class="container-xl">
        <div class="row">
          <div class="col-6">
            <div class="productImage">
              <div class="images" v-viewer>
                <div class="imageBox col-4">
                  <img
                    style="width:100%;display:block;"
                    v-for="(img,index) in product.images"
                    :src="$url+img.image_url"
                    :key="index"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="producDetail">
              <h4>{{product.title}}</h4>
              <p style="font-size:14px;line-height:12px;color:#919191;">{{product.description}}</p>
              <div class="tagBox">
                <div class="appraise float-left">
                  <i class="fa fa-thumbs-o-up" style="color:white;">&nbsp20</i>
                </div>
                <div class="appraise float-left">
                  <i class="fa fa-commenting-o" style="color:white;">&nbsp20</i>
                </div>
              </div>
              <div class="productPrice">¥{{price}}</div>
              <div class="detailBtn">
                <p>查看详情参数</p>
              </div>
              <div class="dropdownBox">
                <div>
                  选&nbsp&nbsp项：
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle refractivity"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >{{product.sku[currentSku].description}}</a>

                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item"
                        v-for="(sku,index) of product.sku"
                        :key="index"
                        @click="changeSku(index)"
                      >{{sku.description}}</a>
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
                <p class="float-left">数&nbsp&nbsp&nbsp量：</p>
                <div class="input-group input-group-sm mb-3" style="width:80px;padding-top:5px">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="amount--"
                      :disabled="amount==1"
                    >-</button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder
                    aria-describedby="basic-addon1"
                    style="text-align:center"
                    :value="amount"
                    disabled
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="amount++">+</button>
                  </div>
                </div>
              </div>
              <div class="commit">
                <button
                  type="button"
                  class="commitBtn btn btn-danger btn-lg rounded-pill"
                  @click="addToCart()"
                >添加购物车</button>
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
        <div class="tab-pane fade show active" id="nav-delailValue" role="tabpanel">
          <div class="container-xl detilTable">
            <div class="row">
              <div
                class="col-3"
                v-for="(parameter,index) of product.productable"
                :key="index"
                v-show="parameters[index]!=undefined"
              >{{parameters[index]+"："+parameter}}</div>

              <div class="col-3"></div>
            </div>
          </div>
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
  mounted() {
    this.$http
      .post(this.$api.getProduct, {
        productId: this.$route.params.productId
      })
      .then(res => {
        this.product = res.product;
        console.log(res.product);
      });
  },
  data() {
    return {
      product: {},
      currentSku: 0,
      amount: 1,
      parameters: {
        brand: "品牌",
        type: "类型",
        transmittance: "折射系数",
        refraction: "折射",
        weight: "重量",
        membrane: "膜",
        spherical: "球面",
        texture: "材质",
        country: "国家"
      },
      brand: {
        ZEISS: "蔡司",
        Essilor: "依视路",
        HOYA: "豪雅",
        Rodenstock: "罗敦司得",
        Seiko: "精工",
        Shamir: "沙米尔",
        Chemilens: "凯米",
        Younger: "雅歌",
        Transitions: "全视线",
        Kodak: "柯达",
        Nikon: "尼康",
        Asahi: "朝日",
        TOKAI: "东海",
        WX: "万新",
        Conant: "康耐特",
        Mingyue: "明月",
        Norville: "诺威尔",
        ITOH: "伊藤",
        Nidek: "尼德克"
      },
      type: [
        "单光镜片",
        "渐进镜片",
        "防蓝光镜片",
        "太阳镜片",
        "偏光镜片",
        "运动镜片",
        "变色镜片",
        "染色镜片",
        "定制镜片",
        "成长乐镜片",
        "驾驶型镜片",
        "数码型镜片",
        "菁悦活力镜片"
      ],
      country: [
        "中国",
        "德国",
        "日本",
        "美国",
        "以色列",
        "法国",
        "韩国",
        "英国"
      ]
    };
  },
  methods: {
    changeSku(index) {
      this.currentSku = index;
    },
    addToCart() {
      this.$http.post(this.$api.addToCart, {
        skuId: this.product.sku[this.currentSku].id,
        amount: this.amount
      });
    }
  },
  computed: {
    price() {
      return this.product.sku[this.currentSku].price;
    }
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
.dropdown-item {
  text-align: center;
  cursor: pointer;
}
.detilTable {
  height: 500px;
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
  .col-3 {
    text-align: center;
    line-height: 40px;
    height: 40px;
    border: none;
    margin-bottom: 20px;
    color: #919191;
  }
}
.imageBox {
  display: flex;
  height: 150px;
  align-items: center;
  cursor: pointer;
}
.productImage {
  height: 100%;
  > div {
    height: 100%;
  }
}
</style>