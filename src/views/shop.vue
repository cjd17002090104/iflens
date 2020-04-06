<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="container-xl">
      <div class="row">
        <div class="col-9">
          <div class="sortConfig"></div>
          <div class="productBox">
            <div>
              <div class="productImage">
                <a>
                  <img src="~assets/images/example.jpg" width="100%" />
                </a>
              </div>
              <div class="description">
                <p
                  style="font-size:16px;line-height: 22px;color: #484848;text-align:left;margin-top:40px"
                  title="Ducky One 2 Mini RGB LED 60% Double Shot PBT Mechanical Keyboard"
                >Ducky One 2 Mini RGB LED 60% Double Shot PBT Mechanical Keyboard</p>
                <p style="font-size:14px;line-height:24px;color:#1f9316;">Availability: In Stock</p>
                <p
                  style="font-size:14px;line-height:26px;color:#919191;"
                >Switch options: Cherry MX Brown, Blue, Red, Black, Silver, or Silent RedKailh BOX White.</p>
              </div>
              <div class="operation">
                <p class="advicePrice">￥66</p>
                <div class="btn">
                  <button type="button" class="btn btn-primary details">查看详情</button>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation">
            <span style="line-height:38px;margin-left:30px;">第1页，共N页</span>
            <ul class="pagination float-right">
              <li class="page-item">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link">1</a>
              </li>
              <li class="page-item">
                <a class="page-link">2</a>
              </li>
              <li class="page-item">
                <a class="page-link">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
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
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜片
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜架
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜片
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜架
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜片
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-angle-right"></i> 镜架
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
                    <span>
                      <i class="fa fa-angle-right"></i>
                      卡尔蔡司
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
                aria-expanded="false"
                aria-controls="rightColumn3"
              >热销商品</h5>
              <div id="rightColumn3" class="collapse" role="tabpanel">
                <ul>
                  <li>
                    <div class="hotSale">
                      <div class="hotImage">
                        <a>
                          <img src="~assets/images/example.jpg" width="100%" />
                        </a>
                      </div>
                      <div class="hotDescription">
                        <p class="hotTitle">Switch options: Cherry MX Brown, Blue, Red</p>
                        <p class="hotPrice">￥66</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="hotSale">
                      <div class="hotImage">
                        <a>
                          <img src="~assets/images/example.jpg" width="100%" />
                        </a>
                      </div>
                      <div class="hotDescription">
                        <p class="hotTitle">Switch options: Cherry MX Brown, Blue, Red</p>
                        <p class="hotPrice">￥66</p>
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
  data() {
    return {};
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
  li > span {
    cursor: pointer;
  }
  i {
    margin-right: 5px;
  }
}
.hotSale {
  height: 100px;
  > div {
    height: 100%;
    float: left;
  }
  li {
    margin-bottom: 20px;
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
}
.hotTitle:hover {
  color: #fe6200;
}
.hotPrice {
  font-size: 20px;
}
</style>