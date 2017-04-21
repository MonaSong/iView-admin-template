<template>
  <div class="header">
    <div class="header-left">
      iview-admin-template
    </div>
    <Row type="flex" justify="space-between">
      <Col :xs="{ span: 24 }" :lg="{ span: 3, offset: 21 }">
        <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="selectOut">
          <Submenu name="3">
              <template slot="title">
                  <Icon type="person"></Icon>
                  用户设置
              </template>
              <Menu-item name="out">退出</Menu-item>
              <Menu-item name="profile">个人信息</Menu-item>
          </Submenu>
      </Menu> 
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        right: '右边',
        left: '左边',
        theme1: 'light',
        menuName: ''
      }
    },
    methods: {
      selectOut (args) {
        switch (args) {
          case 'out':
            this.$router.push('/')
            break
          case 'profile':
            this.$router.push('/profile')
            break
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/base.less';
  .header{
    position: relative;
    height: 60px;
    width: 100%;
    background-color: @theme-color;
    color: @white;
    z-index: 10;
    .header-left{
      float: left;
      height: 60px;
      width: 240px;
      padding-left: 30px;
      font-size: 18px;
      font-weight: 700;
      line-height: 55px;;
    }
    .ivu-menu-light{
      background-color: @theme-color;
      height: 61px;
      .ivu-menu-submenu-title{
        color: @white;
      }
      .ivu-menu-submenu.ivu-menu-opened{
        border-bottom: 1px solid transparent;
      }
    }
  }
</style>
