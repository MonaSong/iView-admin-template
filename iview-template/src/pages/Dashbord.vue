<template>
  <div class="dashbord">
    <Row type="flex" justify="space-between">
      <Col  :xs="{span:24}" :md="{span:10}" :lg="{span:5}" >
        <Card class="mycard">
          <div class="card-box">
            <img src="../assets/images/vue.png" alt="">
            <h3>基于vue的ui组件</h3>
          </div>
        </Card>
      </Col>
      <Col  :xs="{span:24}" :md="{span:10}" :lg="{span:5}">
        <Card class="mycard">
          <div class="card-box">
            <img src="../assets/images/vue.png" alt="">
            <h3>基于vue的ui组件</h3>
          </div>
        </Card>
      </Col>
      <Col  :xs="{span:24}" :md="{span:10}" :lg="{span:5}">
        <Card class="mycard">
          <div class="card-box">
            <img src="../assets/images/vue.png" alt="">
            <h3>基于vue的ui组件</h3>
          </div>
        </Card>
      </Col>
      <Col  :xs="{span:24}" :md="{span:10}" :lg="{span:5}">
        <Card class="mycard">
          <div class="card-box">
            <img src="../assets/images/vue.png" alt="">
            <h3>基于vue的ui组件</h3>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'dashbord',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/base.less';
  .dashbord{
    .mycard{
      background-color: @white;
      .card-box{
        color: @dark;
        text-align: center;
        img{
          max-width: 100px;
          height: auto;
        }
      }
    }
  }
</style>
