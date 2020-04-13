<template>
  <div>
    <headTop></headTop>

    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="Carousel">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="container-xl">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/slider1.jpg" class="d-block h-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/images/slider2.jpg" class="d-block h-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/images/slider3.jpg" class="d-block h-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
        <div class="card-deck">
          <div class="card">
            <img src="~assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="~assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="~assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="~assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
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
      isLogin: 1
    };
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
// .title {
//   color: #fe6200;
//   font-family: "DFKai-SB";
//   font-style: italic;
//   float: left;
//   margin-bottom: 0;
//   span {
//     color: #a8a9a9;
//   }
// }
// .about {
//   float: right;
// }

// .nav_btns {
//   float: right;
// }
// .logo {
//   height: 100%;
//   border: 1px solid black;
//   float: left;
//   width: 17%;
//   margin-right: 100px;
// }
// .search_top {
//   .container-xl {
//     height: 100px;
//   }
//   height: 100px;
//   margin-bottom: 20px;
// }
// .search_box {
//   float: left;
//   height: 100%;
//   width: 59%;
// }
// #search {
//   border: 2px solid #e5e5e5;
//   height: 50px;
//   font-size: 16px;
// }
// #search:focus {
//   box-shadow: none !important;
//   border-color: #e5e5e5;
// }
// #search_category {
//   border-radius: 40px 0px 0px 40px;
//   border: 2px solid #e5e5e5;
//   font-size: 16px;
//   height: 50px;
//   width: 170px;
//   color: #989898;
// }
// #search_btn {
//   margin-left: -30px;
//   background-color: #ced4da;
//   border-color: #ced4da;
//   border-radius: 50px;
//   width: 80px;
//   z-index: 99;
//   height: 50px;
// }

// #carouselExampleCaptions {
//   height: 590px;
// }
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
</style>