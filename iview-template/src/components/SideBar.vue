<template>
  <div class="sidebar">
    <div class="user-profile">
      <Row type="flex" justify="center">
        <Col :xs="{span:8,offset:2}">
          <div class="user-img"></div>
        </Col>
        <Col :xs="{span:12,offset:1}">
          <div class="user-profile-info">
            <p>{{name}}</p>
            <p class="profile-info">{{profile}}</p>
          </div>
        </Col>
      </Row>
    </div>
    <div class="menu">
      <Row type="flex" justify="space-between">
        <Col :xs="{span:24}">
          <Menu :theme="theme2" active-name="1-2" :open-names="['1']" :style="{width:'auto'}" @on-select="skipPage">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                <span v-if="isShowMenu">内容管理</span>
              </template>
              <Menu-item name="profile">用户首页</Menu-item>
              <Menu-item name="1-2" >评论管理</Menu-item>
              <Menu-item name="1-3">举报管理</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"></Icon>
                <span 用户管理</span>
              </template>
              <Menu-item name="2-1">新增用户</Menu-item>
              <Menu-item name="2-2">活跃用户</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                <span>统计分析</span>
              </template>
              <Menu-group title="使用" >
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
              </Menu-group>
              <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
              </Menu-group>
            </Submenu>
          </Menu>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme2: 'dark',
        name: 'Alan Wilson',
        profile: 'Music Artist',
        isShowMenu: true,
        smWidth: 240
      }
    },
    created () {
      // alert(1)
    },
    mounted () {
    },
    methods: {
      skipPage (args) {
        if (args === 'profile') {
          this.$router.push('/profile')
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/base.less';
  .sidebar{
    width: 240px;
    &:before{
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      content: ' ';
      height: 100%;
      width: 240px;
      background-color: @side-bar-bg-color;
      box-shadow: 2px 0 10px #eaeaea;
    }
    .user-profile{
      position: relative;
      height: 130px;
      width: 240px;
      padding-top: 30px;
      background-color: @side-bar-bg-color;
      color: @white;
      border-bottom: 1px solid @dark;
      margin-bottom: 30px;
      .user-img{
        width:65px;
        height: 65px;
        background-size: cover;
        background-image: url('../assets/images/user.png');
        border-radius: 100%;
      }
      .user-profile-info{
        position: relative;
        top: 15px;
        font-size: 15px;
        font-weight: 700;
        .profile-info{
          font-weight: normal;
          color: @info-text-color;
        }
      }
    }
    .menu{
      width: 100%;
    }
    .ivu-menu-vertical.ivu-menu-light:after{
      background-color: transparent;
    }
  }
  // @media (max-width:480px){
  //   .sidebar{
  //     width: 60px;
  //     &:before{
  //       width: 60px;
  //     }
  //     .user-profile{
  //       width: 100%;
  //     }
  //     .user-profile-info{
  //       display: none;
  //     }
  //   }
  // }
</style>
