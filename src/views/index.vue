<template>
  <div>
    <headTop></headTop>

    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="Carousel">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            v-for="(carousel,index) of carousels"
            :key="index"
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            :class="{'active':index==0}"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="container-xl">
          <div class="carousel-inner">
            <div
              :class="['carousel-item',{'active':index==0}]"
              v-for="(carousel,index) of carousels"
              :key="index"
              @click="$router.push({name:'productInfo', params: {'productId':carousel.id}})"
            >
              <img :src="carousel.url" class="d-block h-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="hot">
      <div class="container-xl" style="text-align:left">
        <div class="tittle">热销产品</div>
        <hr
          style="height:1px;border:none;border-top:1px solid #e5e5e5; margin-top:10px; margin-bottom:40px"
        />
        <div class="cardList">
          <div
            class="card"
            v-for="(product,index) of products"
            :key="index"
            @click="$router.push({name:'productInfo', params: {'productId':product.id}})"
          >
            <div class="imagBox">
              <img :src="$url+product.images[0].image_url" class="card-img-top" />
            </div>

            <div class="card-body">
              <h5 class="title" style="font-size:16px;">{{product.title}}</h5>
              <p class="card-text" style="margin-bottom:5px;">
                <span
                  class="badge badge-secondary"
                  style="margin-right:10px"
                  v-for="(sku,index) of product.sku"
                  :key="index"
                >
                  <small>{{sku.title}}</small>
                </span>
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text float-left">
                价格:
                <span style="color:#fe6200;">￥{{product.sku.length?product.sku[0].price:66}}</span>
              </p>

              <p class="card-text float-left" style="margin-left:30px;">
                销量:
                <span style="color:red;">{{product.items_count}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      amount: 8,
      carousels: [
        { url: require("@/assets/images/slider1.jpg"), id: 1 },
        { url: require("@/assets/images/slider2.jpg"), id: 2 },
        { url: require("@/assets/images/slider3.jpg"), id: 3 }
      ]
    };
  },
  mounted() {
    this.getHotProducts();
  },
  methods: {
    getHotProducts() {
      this.$http
        .post(this.$api.getHotProducts, { amount: this.amount })
        .then(res => {
          if (res.status == 200) {
            this.products = res.products;
            console.log(this.products);
          }
        });
    }
  }
};
</script>
<style scoped lang="scss">
* {
  font-family: "Microsoft YaHei";
}
ul,
li {
  list-style: none;
  margin: 0;
}

input[type="text"]::-webkit-input-placeholder {
  color: #bebebe;
}
input[type="text"]:-moz-placeholder {
  color: #bebebe;
}
input[type="text"]::-moz-placeholder {
  color: #bebebe;
}
input[type="text"]:-ms-input-placeholder {
  color: #bebebe;
}

// .header_top {
//   height: 50px;
//   border-bottom: 1px solid #e5e5e5;
//   margin-bottom: 20px;
// }
// #top_nav {
//   width: 1370px;
//   height: 100%;
//   margin: 0 auto;
//   padding: 0 16px 0 16px;
//   box-sizing: border-box;
//   justify-content: space-between;
// }
// .container-xl {
//   height: 100px;
// }
//xl container宽度
@media (min-width: 1200px) {
  .container-xl {
    max-width: 1170px;
  }
}
.container-xl {
  min-width: 1170px;
}
.Carousel {
  margin-bottom: 40px;
  height: 590px;
  overflow: hidden;
  background: #f2f2f2;
}
.Carousel > div {
  height: 100%;
}
.carousel-item {
  height: 100%;
}
#carouselExampleCaptions {
  .container-xl {
    height: 100%;
    overflow: hidden;
  }
}
.carousel-inner {
  height: 100%;
}
.title_bar {
  width: 100%;
  border: 1px 0 0 0;
}
.card-deck {
  flex-wrap: wrap;
}
.row {
  padding: 15px;
}
.card {
  width: 250px;
  margin-right: 17px;
  margin-left: 17px;
  margin-bottom: 40px;
  .imagBox {
    width: 100%;
    height: 164px;
    padding: 10px;
    box-sizing: boder-box;
    display: flex;
    align-items: center;
  }
}
.cardList {
  justify-content: left;
  display: flex;
  flex-wrap: wrap;
}
.card-footer {
  line-height: 15px;
  height: 40px;
}
.card {
  cursor: pointer;
}
.carousel-item {
  cursor: pointer;
}
</style>