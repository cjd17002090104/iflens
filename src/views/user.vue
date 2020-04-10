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
              <img class="userImage rounded-circle" src="~assets/images/login_bg.jpg" />
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
                    <input type="text" class="form-control" :value="user.name" />
                  </div>

                  <div class="input-group input-group-sm checkBox"></div>
                  <div class="save" style="display:block">
                    <button type="button" class="btn btn-info">保存</button>
                  </div>
                </div>
                <div slot="myMessage1" class="myMessage1">
                  <div class="ImageBox">
                    <img class="userImage rounded-circle" src="~assets/images/login_bg.jpg" />
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
                            <a class="operation" style="margin-right:15px;">修改</a>
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
                      @click="modelOpen()"
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
                    <li class="product">
                      <div class="row">
                        <div class="col-5 productInfo">
                          <div class="productImg">
                            <img src="~assets/images/example.jpg" />
                          </div>
                          <div class="description">
                            <div class="productName">
                              <p>123123asdasd1</p>
                            </div>
                            <div class="sku">123123</div>
                          </div>
                        </div>
                        <div class="col-2 price">￥66</div>
                        <div class="col-1 number">1</div>
                        <div class="col-2 productState">正在派发</div>
                        <div
                          class="col-2 operation"
                          data-toggle="modal"
                          data-target=".orderDetial"
                        >查看详情</div>
                      </div>
                    </li>
                  </ul>

                  <div class="modal fade orderDetial" tabindex="-1" role="dialog">
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
                  </div>
                </div>
                <div class="myOrder1" slot="myOrder1">
                  <ul class="ShoppingCart">
                    <li class="product">
                      <div class="row">
                        <div class="col-1">
                          <input type="checkbox" value="Vue.js" />
                        </div>
                        <div class="col-5 productInfo">
                          <div class="productImg">
                            <img src="~assets/images/example.jpg" />
                          </div>
                          <div class="description">
                            <div class="productName">
                              <p>123123asdasd1</p>
                            </div>
                            <div class="sku">123123</div>
                          </div>
                        </div>
                        <div class="col-2 price">￥66</div>
                        <div class="col-1 number">1</div>
                        <div class="col-2 operation">查看详情</div>
                      </div>
                    </li>
                  </ul>
                  <div class="Settlement">
                    <button type="button" class="btn btn-danger float-md-right">结算</button>
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
      currentAddress: {
        id: "",
        contact_name: "",
        contact_phone: "",
        address: ""
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
      ]
    };
  },
  methods: {
    tabChange(tab, tabName) {
      let i = this.active;
      this.active = tab;
      this.tabName = tabName;
    },

    initAddress() {
      for (let index in this.currentAddress) {
        this.currentAddress[index] = "";
      }
    },
    modelOpen() {
      this.initAddress();
    },
    addAddress() {
      for (let index in this.currentAddress) {
        if (this.currentAddress[index].trim() == "" && index != "id") {
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
        console.log(this.user);
      }
    });
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
  border: 1px solid black;
  display: flex;
  align-items: center;
  > img {
    width: 100%;
  }
}
.product {
  height: 85px;
  margin-bottom: 50px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .col-2,
  .col-1 {
    text-align: center;
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

.ShoppingCart {
  height: 600px;
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
</style>