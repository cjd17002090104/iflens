  <template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="userUi" v-show="!user==''">
      <div class="container-xl">
        <div>
          <div class="leftClomn">
            <div class="tittle">
              <p>个人中心</p>
            </div>
            <div class="imageBox">
              <img class="userImage rounded-circle" :src="$url+user.image.image_url" />
              <div calss="name">
                <p style="font-size:22px;margin-top:5px">{{user.name}}</p>
                <p style="margin-top:-10px">普通用户</p>
              </div>
            </div>
            <div class="menus">
              <div id="exampleAccordion" data-children=".menu">
                <div class="menu" v-for="(menu,index) in frist_tabs" :key="index">
                  <div
                    class="menuTitle"
                    :href="'#'+menu.info+'tab'"
                    data-toggle="collapse"
                    data-parent="#exampleAccordion"
                  >{{menu.name}}</div>

                  <div
                    :id="menu.info+'tab'"
                    v-for="(tab,index) in menu.second_tabs"
                    :key="index"
                    class="tabs collapse show"
                    role="tabpanel"
                    :name="(menu.info+index)==active?'active':''"
                    @click="tabChange(menu.info+index,tab)"
                  >{{tab}}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="tittle">
              <p>{{tabName}}</p>
            </div>
            <div class="tab-content">
              <tab-content :tabName="active">
                <!-- 个人信息 -->
                <div slot="myMessage0" class="myMessage0">
                  <div class="input-group input-group-sm name">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">昵称</span>
                    </div>
                    <input type="text" class="form-control" v-model="currentName" />
                  </div>
                  <div class="eyes_data">
                    <div class="input-group input-group-sm eyesDataStatus">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">近视远视情况</span>
                      </div>
                      <input type="text" class="form-control" v-model="currentEyesData.status" />
                    </div>
                    <div class="input-group input-group-sm eyesDataVision">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">视力</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        v-model="currentEyesData.left"
                        placeholder="左眼度数"
                      />
                      <input
                        type="text"
                        class="form-control"
                        v-model="currentEyesData.right"
                        placeholder="右眼度数"
                      />
                    </div>
                    <div class="input-group input-group-sm eyesDataOther">
                      <div class="input-group-prepend pd">
                        <span class="input-group-text" id="inputGroup-sizing-sm">瞳距</span>
                      </div>
                      <input type="text" class="form-control" v-model="currentEyesData.pd" />
                      <div class="input-group-prepend axis">
                        <span class="input-group-text" id="inputGroup-sizing-sm">轴度</span>
                      </div>
                      <input type="text" class="form-control" v-model="currentEyesData.axis" />
                    </div>
                    <div class="input-group input-group-sm eyesDataVisualAcuity">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">矫正视力</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        v-model="currentEyesData.visual_acuity"
                      />
                    </div>
                    <div class="input-group input-group-sm eyesDatacylinder">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">散光</span>
                      </div>
                      <input type="text" class="form-control" v-model="currentEyesData.cylinder" />
                    </div>
                  </div>

                  <div class="input-group input-group-sm checkBox"></div>
                  <div class="save" style="display:block">
                    <button type="button" class="btn btn-info" @click="updateUserData()">保存</button>
                  </div>
                </div>
                <div slot="myMessage1" class="myMessage1">
                  <div class="ImageBox">
                    <img class="userImage rounded-circle" :src="$url+user.image.image_url" />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >更换头像</button>

                  <div
                    class="modal fade bd-example-modal-lg"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content uploadImg">
                        <cropperComponent></cropperComponent>
                      </div>
                    </div>
                  </div>
                  <ul class="userSave">
                    <li>
                      <div>
                        <p class="optionName">密码</p>
                        <p class="optionState">已绑定</p>
                        <a type="button" class="operation">修改密码</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="optionName">手机</p>
                        <p class="optionState">已绑定</p>
                        <a type="button" class="operation">修改手机</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="optionName">邮箱</p>
                        <p class="optionState">已绑定</p>
                        <a type="button" class="operation">修改邮箱</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div slot="myMessage2" class="addressTable">
                  <div class="addresses">
                    <ul class="addressList">
                      <li class="listHead">
                        <div class="row">
                          <div class="col-6">地址</div>
                          <div class="col-2">联系方式</div>
                          <div class="col-2">收件人</div>
                          <div class="col-2">操作</div>
                        </div>
                      </li>

                      <li class="address" v-for="(address,index) of user.addresses" :key="index">
                        <div class="row">
                          <div class="col-6">{{address.address}}</div>
                          <div class="col-2">{{address.contact_phone}}</div>
                          <div class="col-2">{{address.contact_name}}</div>
                          <div class="col-2">
                            <a
                              class="operation"
                              style="margin-right:15px;"
                              data-toggle="modal"
                              data-target="#addressModal"
                              @click="modelOpen(address)"
                            >修改</a>
                            <a class="operation" id="delete" @click="deleteAddress(address.id)">删除</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="footer">
                    <div
                      class="btn btn-danger"
                      data-toggle="modal"
                      data-target="#addressModal"
                      @click="modelOpen(null)"
                    >添加地址</div>
                  </div>
                  <div class="modal fade" id="addressModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addressModalTitle">添加地址</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <!-- 模态框 -->
                        <div class="modal-body">
                          <div
                            class="input-group input-group-sm"
                            style="width:200px;margin-bottom:20px"
                          >
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroup-sizing-sm">收件人</span>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              v-model="currentAddress.contact_name"
                            />
                          </div>
                          <div
                            class="input-group input-group-sm"
                            style="width:200px;margin-bottom:20px"
                          >
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroup-sizing-sm">联系方式</span>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              v-model="currentAddress.contact_phone"
                            />
                          </div>
                          <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroup-sizing-sm">地址</span>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              v-model="currentAddress.address"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary" @click="addAddress()">保 存</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="myOrder0" slot="myOrder0">
                  <ul class="myOrders">
                    <li class="myOrdersTitle">
                      <div class="row" style="text-align:center">
                        <div class="col-6">商品</div>
                        <div class="col-2">单价</div>
                        <div class="col-2">数量</div>
                        <div class="col-2">总价</div>
                      </div>
                    </li>

                    <li class="order" v-for="(order,index) of user.orders" :key="index">
                      <div id="orderAccordion" data-children=".item">
                        <div class="item" style="width:100%">
                          <div
                            data-toggle="collapse"
                            data-parent="#orderAccordion"
                            :href="'#orderAccordion'+index"
                            aria-expanded="true"
                            :aria-controls="'orderAccordion'+index"
                            class="orderTitle"
                          >
                            <h6 class="float-left" style="margin-left:30px;">订单编号：{{order.no}}</h6>

                            <h6
                              class="float-right"
                              style="margin-right:30px;margin-left:60px;"
                            >支付时间：{{order.paid_at}}</h6>
                            <h6
                              class="float-right"
                              style="argin-right:30px"
                            >状态：{{order.order_status}}</h6>
                          </div>
                          <div :id="'orderAccordion'+index" class="collapse show" role="tabpanel">
                            <div
                              class="orderItem row"
                              v-for="(item,index) of order.items"
                              :key="index"
                            >
                              <div class="col-6 productInfo">
                                <div class="productImg">
                                  <img src="~assets/images/example.jpg" />
                                </div>
                                <div class="description">
                                  <div class="productName">
                                    <p>{{item.product.title}}</p>
                                  </div>
                                  <div class="sku">
                                    <span class="badge badge-secondary">{{item.product_sku.title}}</span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-2 price">￥{{item.price}}</div>
                              <div class="col-2 number">{{item.amount}}</div>
                              <div class="col-2 totlePrice price">￥{{item.price*item.amount}}</div>
                            </div>
                            <div class="orderFooter">
                              <div class="addressInfo col-9">
                                <p class="orderAdress">收货地址：{{order.address}}</p>
                                <p class="orderContact">
                                  收货人：陈剑栋
                                  <span style="margin-left:25px;">电话：10086</span>
                                </p>
                              </div>
                              <div class="orderPrice col-3">
                                总计：
                                <span style="color: rgb(255, 74, 74);">￥{{order.total_amount}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <!-- <div class="modal fade orderDetial" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">详情信息</h5>
                        </div>
                        <div class="modal-body">
                          <p>订单编号:</p>
                          <p>物流详情:</p>
                        </div>
                      </div>
                    </div>
                  </div>-->
                </div>
                <div class="myOrder1" slot="myOrder1">
                  <ul class="cartItems">
                    <li class="myOrdersTitle">
                      <div class="row" style="text-align:center">
                        <div class="col-1"></div>
                        <div class="col-5">商品</div>
                        <div class="col-2">单价</div>
                        <div class="col-1">数量</div>
                        <div class="col-2">总价</div>
                      </div>
                    </li>
                    <li class="cartItem" v-for="(cartItem,index) of user.cart_items" :key="index">
                      <div class="row">
                        <div class="col-1 checkClomn">
                          <input type="checkbox" v-model="currentCartItems" :value="cartItem" />
                        </div>
                        <div class="col-5 productInfo">
                          <div class="productImg">
                            <img :src="$url+cartItem.product_sku.product.images[0].image_url" />
                          </div>
                          <div class="description">
                            <div class="productName">
                              <p>{{cartItem.product_sku.product.title}}</p>
                            </div>
                            <span class="badge badge-secondary">{{cartItem.product_sku.title}}</span>
                          </div>
                        </div>
                        <div class="col-2 price">￥{{cartItem.product_sku.price}}</div>
                        <div class="col-1 number">{{cartItem.amount}}</div>
                        <div
                          class="col-2 totlePrice price"
                        >￥{{cartItem.amount*cartItem.product_sku.price}}</div>
                      </div>
                    </li>
                  </ul>
                  <div class="Settlement">
                    <button
                      type="button"
                      class="btn btn-danger float-md-right"
                      @click="Settlement()"
                    >结算 ￥{{ItemsPrice}}</button>
                  </div>
                  <div
                    class="modal fade"
                    id="cartModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="cartModalLabel">购物车</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>
                            <span style="color:#dc3545">{{currentCartItems.length}}</span>条订单，共
                            <span style="color:#dc3545">{{ItemsPrice}}</span>元
                          </p>
                          <div class="dropdown">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >选择地址</button>
                            <div
                              class="dropdown-menu addressDropdown"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a
                                class="dropdown-item"
                                v-for="(address,index) of user.addresses"
                                :key="index"
                                @click="changeCartAddress(address)"
                              >
                                <p>{{address.address}}</p>
                                <p
                                  style="font-size:14px;color:#99a2aa;float:left;margin-right:20px"
                                >联系人：{{address.contact_name}}</p>
                                <p
                                  style="font-size:14px;color:#99a2aa;float:left"
                                >电话：{{address.contact_phone}}</p>
                              </a>
                            </div>
                          </div>
                          <div class="input-group addressInput" style="margin-top:20px;">
                            <div class="input-group-prepend">
                              <span class="input-group-text">地址</span>
                            </div>

                            <input
                              type="text"
                              class="form-control col-6"
                              disabled
                              :value="cartAddress.address"
                            />
                            <input
                              type="text"
                              class="form-control col-2"
                              disabled
                              :value="cartAddress.contact_name"
                            />
                            <input
                              type="text"
                              class="form-control col-4"
                              disabled
                              :value="cartAddress.contact_phone"
                            />
                          </div>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary" @click="pay()">确定支付</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cropperComponent from "@/components/cropperComponent.vue";
import qs from "qs";

export default {
  data() {
    return {
      currentName: "",
      currentAddress: {
        id: "",
        contact_name: "",
        contact_phone: "",
        address: ""
      },
      currentEyesData: {
        status: "",
        left: "",
        right: "",
        cylinder: "",
        pd: "",
        axis: "",
        visual_acuity: ""
      },
      user: "",
      //active的tab名称
      tabName: "",
      //active的tab-content的插槽名称
      active: "",
      frist_tabs: [
        {
          name: "我的信息",
          info: "myMessage",
          second_tabs: ["个人信息", "信息设置", "我的地址"]
        },
        {
          name: "我的订单",
          info: "myOrder",
          second_tabs: ["全部订单", "购物车"]
        }
      ],
      currentCartItems: [],
      cartAddress: ""
    };
  },
  methods: {
    tabChange(tab, tabName) {
      let i = this.active;
      this.active = tab;
      this.tabName = tabName;
    },

    initAddress(address) {
      if (address) {
        this.currentAddress = JSON.parse(
          JSON.stringify({
            id: address.id,
            contact_name: address.contact_name,
            contact_phone: address.contact_phone,
            address: address.address
          })
        );
        console.log(this.currentAddress);
      } else {
        this.currentAddress = {
          id: "",
          contact_name: "",
          contact_phone: "",
          address: ""
        };
      }
    },
    modelOpen(address) {
      this.initAddress(address);
    },
    addAddress() {
      for (let index in this.currentAddress) {
        if (String(this.currentAddress[index]).trim() == "" && index != "id") {
          layer.msg(index + "不能为空");
          return false;
        }
      }
      this.$http
        .post(this.$api.addAddress, { address: this.currentAddress })
        .then(res => {
          if ((res.status = 200)) {
            this.user.addresses = res.addresses;

            $("#addressModal").modal("hide");
          }
        });
    },
    deleteAddress(id) {
      layer.confirm("是否删除该地址", { icon: 3 }, e => {
        this.$http.post(this.$api.deleteAddress, { id: id }).then(res => {
          if (res.status == 200) {
            this.user.addresses = res.addresses;
          }
          layer.close(e);
        });
      });
    },
    changeCartItems(cartItem) {
      let index =
        this.currentCartItems.indexOf(cartItem) == -1
          ? this.currentCartItems.push(cartItem)
          : this.currentCartItems.splice(index, 1);
      console.log(this.currentCartItems);
    },

    Settlement() {
      if (this.currentCartItems.length) {
        $("#cartModal").modal("show");
      } else {
        layer.msg("请选择需要购买的物品");
      }
    },
    changeCartAddress(address) {
      this.cartAddress = JSON.parse(JSON.stringify(address));
    },
    //确定支付
    pay() {
      //判断是否已经选择地址
      if (!this.cartAddress == "") {
        this.$http
          .post(this.$api.setOrder, {
            cartItems: this.currentCartItems,
            address: this.cartAddress.id
          })
          .then(res => {
            if (res.status == 200) {
              this.user.orders = res.orders;
              $("#cartModal").modal("hide");
            }
          });
      } else {
        layer.msg("请选择收货地址");
      }
    },
    getAuth() {
      //发送token
      this.$http.post(this.$api.getAuth).then(res => {
        if (res.status == 200) {
          //存入localstorage
          localStorage.user = JSON.stringify(res.user);
          //存入vuex
          this.$store.commit("setUser");
        }
      });
    },
    updateUserData() {
      for (let index in this.currentEyesData) {
        if (String(this.currentEyesData[index]).trim() == "") {
          layer.msg(index + "不能为空");
          return false;
        }
      }
      delete this.currentEyesData.id;
      this.$http
        .post(this.$api.updateUserData, {
          name: this.currentName,
          eyesData: this.currentEyesData
        })
        .then(res => {
          if (res.status == 200) {
            this.user.name = res.name;
            console.log(this.user.name);
            this.user.eyesData = res.eyesData;
            this.getAuth();
            layer.msg("更新成功", { icon: 1 });
          }
        });
    }

    // ccc(value) {
    //   alert(value);
    // }
  },
  mounted() {
    this.tabName = this.frist_tabs[0].name;
    this.active = this.frist_tabs[0].info + "0";
    //获取用户关联
    this.$http.post(this.$api.getRelevance).then(res => {
      if (res.status == 200) {
        this.user = res.user;
        this.currentName = res.user.name;
        console.log(res.user.eyes_data);
        if (res.user.eyes_data) {
          this.currentEyesData = res.user.eyes_data;
        }
        console.log(this.user);
      }
    });
  },
  computed: {
    ItemsPrice() {
      let price = 0.0;
      this.currentCartItems.forEach(item => {
        price += parseFloat(item.product_sku.price) * parseFloat(item.amount);
      });
      return price;
    }
  },
  components: {
    // 定义组件名
    "tab-content": {
      // 组件结构
      template: `<div><slot :name='tabName'></slot></div>`,

      // data数据
      props: ["tabName"]
    },
    cropperComponent: cropperComponent
  }
};
</script>
<style scoped lang='scss'>
.container-xl {
  > div {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    height: 800px;
    border: 1px solid #e1e2e5;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
    > div {
      height: 100%;
    }
    border-radius: 4px;
  }
}

.leftClomn {
  width: 25%;
  padding: 0px;
  border-right: 1px solid #e1e2e5;
  > .tittle {
    color: #99a2aa;
    > p {
      line-height: 60px;
      font-size: 20px;
    }
  }
}
.content {
  width: 75%;
}

.leftClomn {
  background: #fafafa;
}
.imageBox {
  height: 110px;
  padding: 15px;

  display: flex;
  border-bottom: 1px solid #e1e2e5;
}
.userImage {
  height: 80px;
  width: 80px;
  margin-right: 20px;
  background: black;
}
.tittle {
  height: 60px;
  text-align: center;
  border-bottom: 1px solid #e1e2e5;
}
.content {
  > .tittle {
    color: #00a1d6;
    > p {
      line-height: 60px;
      font-size: 16px;
      float: left;
      margin-left: 20px;
    }
  }
}
.menu {
  border-bottom: 1px solid #e1e2e5;
  overflow: hidden;
}
.menuTitle {
  height: 50px;
  border-bottom: 1px solid #e1e2e5;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  margin-bottom: -1px;
  > a {
    display: block;
    height: 100%;
    width: 100%;
  }
}

.tabs {
  background: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.tabs:hover {
  background: #e1e4ea;
}
.tabs:focus {
  background: #00a1d7;
}
.nav-tabs {
  display: block;
  border: 0px;
  border-top: 1px solid #e1e2e5;
  margin-bottom: -1px;
}

.tabs[name="active"] {
  background: #00a1d7;
  color: white;
}
.tabs[name="active"]:hover {
  background: #00a1d7;
}
.collapsed {
  div {
    height: 300px;
  }
}
.tab-content {
  padding: 30px;
  width: 100%;
  height: 740px;
  > div {
    height: 100%;
  }
}
.myMessage0 {
  > .input-group {
    margin-left: 150px;
    margin-bottom: 30px;
    > p {
      width: 200px;
      text-align: right;
      margin-right: 30px;
    }
    > .input-group-prepend {
    }
  }
}
.name {
  width: 250px;
}
.userName {
  width: 150px;
}
.userDescription {
  width: 500px;
}
.checkBox {
  height: 31px;
}
.gender {
  border: 1px solid #ced4da;
  padding-left: 15px;
  box-sizing: border-box;
  line-height: 31px;
  font-size: 0.875rem;
  height: 100%;
}
.save {
  margin-left: 0px;
  text-align: center;
  border-top: 1px solid #ced4da;
  > button {
    margin-top: 20px;
    width: 80px;
  }
}
.uploadImg {
  padding: 30px;
  box-sizing: border-box;
}
.myMessage1 {
  text-align: center;
  .userImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 30px;
    background: black;
  }
}
.userSave {
  margin-top: 60px;
  > li {
    height: 85px;
    border-top: 1px solid #ced4da;

    > div {
      padding-left: 50px;
      padding-right: 50px;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      display: inline;
    }
  }
}
.optionName {
  margin-bottom: 0px;
  font-size: 16px;
}
.optionState {
  font-size: 14px;
}

.addressList {
  > .address {
    height: 85px;
    border-top: 1px solid #ced4da;
  }
  > li {
    > div {
      padding-left: 50px;
      padding-right: 50px;
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .col-6 {
      text-align: left;
    }
  }
  .listHead {
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .address {
    div {
      line-height: 84px;
    }
    .col-8 {
      text-align: left;
    }
  }
}
.productInfo {
  height: 80px;
  > div {
    float: left;
  }
}
.operation {
  font-size: 14px;
  color: #00a1d6;
  cursor: pointer;
}
.operation:hover {
  color: #028ab8;
}
.productImg {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  > img {
    width: 100%;
  }
}

.description {
  font-size: 15px;
  height: 100%;
  width: 220px;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }
  p {
    margin-bottom: 0px;
  }
}
.price {
  color: #fe6200;
}

.cartItems {
  height: 600px;
}
.cartItem {
  > .row {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.myOrders,
.ShoppingCart {
  overflow: auto;
  overflow-x: hidden;
}
.addressTable {
  height: 100%;
  .footer {
    border-top: 1px solid #ced4da;
    height: 50px;
    position: relative;
    bottom: 0px;
    > div {
      margin-top: 10px;
      float: right;
    }
  }
  .addresses {
    height: 90%;
  }
}
#delete {
  color: rgb(255, 74, 74);
}
#delete:hover {
  color: rgb(211, 41, 41);
}
.order {
  border: 1px solid #ced4da;
  margin-bottom: 20px;
  border-radius: 5px;
  .col-2,
  .col-1 {
    text-align: center;
  }
}
.myOrdersTitle {
  margin-bottom: 10px;
}
.addressDropdown {
  width: 400px;
  > a {
    height: 60px;
    cursor: pointer;
    > p {
      margin-bottom: 10px;
    }
  }
}
.addressInput > input {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.eyes_data {
  margin-left: 150px;
  > div {
    margin-bottom: 30px;
  }
}
.eyesDataStatus {
  width: 200px;
}
.eyesDataVision {
  width: 300px;
}
.eyesDataCylinder {
  width: 150px;
}
.eyesDataOther {
  width: 350px;
}
.eyesDataVisualAcuity {
  width: 200px;
}
.eyesDatacylinder {
  width: 150px;
}
.myOrder0 {
  height: 650px;
  ul {
    height: 100%;
  }
}

.orderTitle {
  width: 100%;
  height: 40px;
  color: #99a2aa;
  background-color: rgba(0, 0, 0, 0.03);
  > h6 {
    line-height: 40px;
    margin-bottom: 0px;
  }
}
.checkClomn {
  text-align: center;
  line-height: 85px;
}
.orderItem {
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .productImg {
      padding-left: 30px;
      width: 120px;
    }
  }
}
.orderFooter {
  height: 60px;
  color: #99a2aa;
  background-color: rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 25px;
  > div {
    float: left;
  }
  .orderPrice {
    line-height: 60px;
    text-align: right;
  }
  p {
    margin-bottom: 5px;
  }
}
</style>