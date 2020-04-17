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
            <div class="selectBox">
              <button
                id="search_category"
                class="btn btn-outline-light dropdown-toggle border-right-1"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{type[currentType].name}}</button>
              <div class="dropdown-menu">
                <a
                  :class="['dropdown-item',{'active':currentType==index}]"
                  href="#"
                  v-for="(type,index) of type"
                  :key="index"
                  @click="changeCurrentType(index)"
                >{{type.name}}</a>
              </div>
            </div>
          </div>
          <div class="searchBox">
            <input
              type="text"
              class="form-control border-left-0 dropdown-toggle"
              id="search"
              placeholder="请输入内容..."
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-model="title"
              @focus="searchDropdown=1"
            />
            <div class="dropdown-menu" v-show="searchDropdown">
              <a
                class="dropdown-item"
                href="#"
                v-for="(product,index) of this.searchProducts"
                @click="$router.push({name:'productInfo', params: {'productId':product.id}})"
                :key="index"
              >{{product.title}}</a>
            </div>
          </div>
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
export default {
  data() {
    return {
      type: [
        { name: "全部分类" },
        { name: "镜片", value: `App\\Models\\Lens` },
        { name: "镜架", value: `App\\Models\\Frame` }
      ],
      currentType: 0,
      title: "",
      searchAmount: "",
      searchDropdown: 0
    };
  },
  mounted() {
    if (this.$store.state.searchProducts == null) {
      this.getSeacrchProducts();
    }
  },
  methods: {
    getSeacrchProducts() {
      this.$http.post(this.$api.getSearchProducts).then(res => {
        if (res.status == 200) {
          this.$store.commit("setSearchProducts", res.products);
        }
      });
    },
    changeCurrentType(index) {
      this.currentType = index;
    }
  },
  computed: {
    allProducts() {
      if (this.currentType != 0) {
        return this.$store.getters.searchProducts.filter(product => {
          return product.productable_type == this.type[this.currentType].value;
        });
      }
      return this.$store.getters.searchProducts;
    },
    searchProducts() {
      console.log(this.allProducts);
      if (this.allProducts != null && this.title.trim() != "") {
        return this.allProducts
          .filter(product => {
            return product.title.indexOf(this.title.trim()) !== -1;
          })
          .slice(0, 10);
      }
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
.searchBox {
  width: 50%;
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