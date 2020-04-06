<template>
  <div>
    <headTop></headTop>
    <searchTop></searchTop>
    <pageNav></pageNav>
    <div class="container-xl">
      <div class="list card">
        <div class="card-header">当前品牌</div>
        <div class="card-body">
          <div class="col-3 order">
            <div class="card">
              <img
                src="~assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="title">Cardtitleqweqwasdasqeqe</h5>
                <p class="card-text" style="margin-bottom:5px;">
                  <small class="text-muted">红色</small>
                </p>
                <p class="card-text float-left">
                  单价:
                  <span style="color:#fe6200;">￥66</span>
                </p>
                <p class="card-text float-left" style="margin-left:30px;">
                  数量:
                  <span style="color:red;">2</span>
                </p>
              </div>
              <div class="card-footer btn" data-toggle="modal" data-target=".orderDetial">查看详情</div>
            </div>
          </div>
        </div>
        <div class="modal fade orderDetial" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">详情信息</h5>
              </div>
              <div class="modal-body">
                <p>商品名称：asdasdadada</p>
                <p>客户名称：AssHunter</p>
                <p>款式：sadasdasd</p>
                <p>单价：sadasdasd</p>
                <p>数量：2</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-danger">接取此单</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
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
<style scoped lang='scss'>
.container-xl {
  > .list {
    margin-top: 50px;
    margin-bottom: 50px;
    height: 920px;
    border: 1px solid #e1e2e5;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
    > .card-body {
      display: flex;
      flex-wrap: wrap;
    }
    > .card-footer {
      > nav {
        float: right;
      }
    }
    .order {
      height: 350px;
      > div {
        height: 100%;
        .title {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-footer {
          height: 50px;
        }
      }
    }
  }
}
</style>