<template>
  <div class="profile">
    <Row type="flex" justify="space-between">
      <Col :xs="{span:24}" :lg="{span:6}">
        <div class="profile-left">
          <h3 class="profile-title">Profile Title</h3>
          <p class="user-img"><img src="../assets/images/user.png" alt=""></p>
          <h3>{{curName}}</h3>
          <p>{{curProfile}}</p>
        </div>
      </Col>
      <Col :xs="{span:24}" :lg="{span:17,offset:1}">
        <div class="profile-right">
          <Card :bordered="false">
            <p slot="title">{{curName}}</p>
            <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        curName: this.$store.state.userName,
        curProfile: this.$store.state.userProfile
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/base.less';
  .profile{
    .profile-left{
      width: 100%;
      text-align: center;
      .profile-title{
        font-size: 30px;
        font-weight: 800;
        color: @light-dark;
      }
      .user-img{
        img{
          border-radius: 100%;
        }
      }
    }
  }
</style>
