<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="container-xl">
      <div class="row">
        <div class="col-9">
          <!-- <div class="sortConfig"></div> -->
          <div
            class="productBox"
            v-for="(product,index) in products"
            :key="index"
            v-show="index>=(currentPage-1)*pageStep&&index<currentPage*pageStep"
          >
            <div>
              <div class="productImage">
                <a>
                  <img :src="$url+product.image" style="width:100%" />
                </a>
              </div>
              <div class="description">
                <p
                  style="font-size:16px;line-height: 22px;color: #484848;text-align:left;margin-top:25px"
                  :title="product.title"
                >{{product.title}}</p>
                <p style="font-size:14px;line-height:12px;color:#919191;">{{product.description}}</p>
                <p
                  style="font-size:14px;line-height:24px;color:#1f9316;"
                >销售状态：{{product.on_sale?'可售':""}}</p>
                <p style="font-size:14px;line-height:26px;color:#919191;">
                  商品选项：
                  <span
                    v-for="(sku,index) in product.sku"
                    :key="index"
                    style="margin-right:5px;"
                    class="badge badge-secondary"
                  >{{sku.description}}</span>
                </p>
              </div>
              <div class="operation">
                <p class="advicePrice">¥ {{product.sku.length?product.sku[0].price:66}}</p>
                <div class="btn">
                  <button type="button" class="btn btn-primary details">
                    <span @click=" link(product.id)">查看详情</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation">
            <span style="line-height:38px;margin-left:30px;">第{{currentPage}}页，共{{pageNum}}页</span>

            <ul class="pagination float-right">
              <li
                :class="{'page-item':true,'disabled':currentPage==1} "
                @click="currentPage!=1?currentPage-=1:null"
              >
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item" v-for="index of pageNum" :key="index">
                <span
                  :class=" {'page-link':true,'active':index==currentPage}"
                  @click="changePage(index)"
                >{{index}}</span>
              </li>

              <li
                :class="{'page-item':true,'disabled':currentPage==pageNum} "
                @click="currentPage!=pageNum?currentPage+=1:null"
              >
                <a class="page-link">Next</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-3">
          <div id="rightColumn" data-children=".item">
            <div class="item">
              <h5
                data-toggle="collapse"
                data-parent="#rightColumn"
                href="#rightColumn1"
                aria-expanded="true"
                aria-controls="rightColumn1"
              >分类</h5>
              <div id="rightColumn1" class="collapse show" role="tabpanel">
                <ul>
                  <li v-for="(type,index) in productType" :key="index">
                    <span
                      :class="{'active':type.value==currentProduct}"
                      @click="changeType(type.value)"
                    >
                      <i class="fa fa-angle-right"></i>
                      {{type.name}}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <h5
                data-toggle="collapse"
                data-parent="#rightColumn"
                href="#rightColumn2"
                aria-expanded="false"
                aria-controls="rightColumn2"
              >品牌</h5>
              <div id="rightColumn2" class="collapse" role="tabpanel">
                <ul>
                  <li>
                    <span :class="{'active':null==currentBrand}" @click="changeBrand(null)">
                      <i class="fa fa-angle-right"></i>
                      全部
                    </span>
                  </li>
                  <li class v-for="(brand,index) in productBrand" :key="index">
                    <span :class="{'active':index==currentBrand}" @click="changeBrand(index)">
                      <i class="fa fa-angle-right"></i>
                      {{brand}}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <h5
                data-toggle="collapse"
                data-parent="#rightColumn"
                href="#rightColumn3"
                aria-expanded="true"
                aria-controls="rightColumn3"
              >热销商品</h5>
              <div id="rightColumn3" class="collapse show" role="tabpanel">
                <ul>
                  <li
                    v-for="(product,index) of hotProducts"
                    :key="index"
                    @click="$router.push({name:'productInfo', params: {'productId':product.id}})"
                  >
                    <div class="hotSale">
                      <div class="hotImage">
                        <a>
                          <img :src="$url+product.image" width="100%" />
                        </a>
                      </div>
                      <div class="hotDescription">
                        <p class="hotTitle">{{product.title}}</p>
                        <p
                          class="hotPrice"
                          style="color: #fe6200;"
                        >￥ {{product.sku.length?product.sku[0].price:66}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getProducts();
    this.getHotProducts();
  },

  data() {
    return {
      products: [],
      hotProducts: [],
      isLoding: 1,
      currentPage: 1,
      pageStep: 8,
      amount: 5,
      productType: [
        { name: "全部", value: null },
        { name: "镜架", value: `App\\Models\\Frame` },
        { name: "镜片", value: `App\\Models\\Lens` }
      ],
      productBrand: ["品牌1", "品牌2", "品牌3", "品牌4"]
    };
  },
  methods: {
    //从后端获取product
    getProducts() {
      this.$http.get(this.$api.getProducts).then(res => {
        if (res.status == 200) {
          this.$store.commit("setProducts", res.products);
          this.products = this.Products;
        }
      });
    },

    getHotProducts() {
      this.$http
        .post(this.$api.getHotProducts, { amount: this.amount })
        .then(res => {
          if (res.status == 200) {
            this.hotProducts = res.products;
            console.log(this.hotProducts);
          }
        });
    },

    //换页
    changePage(index) {
      this.currentPage = index;
    },
    //筛选类型
    changeType(value) {
      //改变vuex筛选数据
      this.$store.state.currentProduct = value;
      //改变数据
      this.products = this.Products;
      //当前页置0
      this.currentPage = 1;
      console.log(this.Products);
    },
    //筛选品牌
    changeBrand(index) {
      this.$store.state.currentBrand = index;
      this.products = this.Products;
      this.currentPage = 1;
      console.log(this.Products);
    },
    link(path) {
      this.$router.push({ path: "/shop/" + path });
    }
  },

  computed: {
    //总页数
    pageNum() {
      if (this.products.length > this.pageStep) {
        return Math.floor(this.products.length / this.pageStep) + 1;
      } else {
        return 1;
      }
    },
    currentBrand() {
      return this.$store.state.currentBrand;
    },
    currentProduct() {
      return this.$store.state.currentProduct;
    },
    Products() {
      return this.$store.getters.selectProducts;
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
.operation {
  width: 200px;
}
.container-xl {
  height: 800px;
  margin-top: 30px;
  min-width: 1170px;
}
.row {
  height: 100%;
  > div {
    > div {
      width: 100%;
    }
  }
}
.sortConfig {
  height: 200px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 38px;
}
.productBox {
  width: 100%;
  height: 270px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
  > div {
    height: 100%;
    width: 100%;
    padding: 28px 30px 28px 28px;
    border: 2px solid white;
    border-radius: 10px;
    > div {
      float: left;
      height: 100%;
    }
  }
}
.productImage {
  width: 228px;
  overflow: hidden;
  > a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 212px;
  }
}
.description {
  width: 335px;
  margin-right: 15px;

  > p {
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: left;
  }
}
.productBox:hover {
  > div {
    border: 2px solid #c0c0c081;
  }
}
.details {
  line-height: 43px;
  padding-top: 0;
  padding-bottom: 0;
  width: 140px;
  border-radius: 30px;
}
.advicePrice {
  margin-top: 50px;
  color: #fe6200;
  font-size: 22px;
}
.operation {
  text-align: center;
}

.collapse {
  background: white;
}
.rightColumn > div {
}
.item {
  > h5 {
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #e5e5e5;
    margin: 0;
  }
  ul {
    margin-top: 15px;
  }
  li {
    line-height: 24px;

    margin-bottom: 15px;
    color: #656565;
    font-size: 15px;
  }
  li > span:hover {
    color: #fe6200;
  }

  i {
    margin-right: 5px;
  }
}
.hotSale {
  height: 100px;
  cursor: pointer;
  > div {
    height: 100%;
    float: left;
  }
  li {
    margin-bottom: 20px;
  }
}
.hotSale:hover {
  span {
    color: #fe6200;
  }
}
.hotImage {
  width: 100px;
  margin-right: 10px;
  > a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    > img {
      width: 100%;
    }
  }
}
.hotDescription {
  width: 150px;
}
.hotTitle {
  cursor: pointer;
  height: 50px;
  overflow: hidden;
}
.hotTitle:hover {
  color: #fe6200;
}
.hotPrice {
  font-size: 20px;
}
.product {
  margin-bottom: 20px;
}
.page-item {
  color: #007bff;
  .active {
    background: #007bff;
    color: white;
  }
  cursor: pointer;
}
nav {
  .active:hover {
    background: #007bff;
    color: white;
  }
}

#rightColumn {
  .active {
    color: #fe6200;
  }
  h5,
  span {
    cursor: pointer;
  }
}
</style>