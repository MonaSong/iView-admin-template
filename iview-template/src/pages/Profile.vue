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
            <p>{{inputInfo}}</p>
            <h3>提交个人信息</h3>
            <Input v-model="insertInput" placeholder="请输入..." style="width: 300px"></Input>
            <Button type="primary" @click="insetInfo()">发表</Button>
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
        curProfile: this.$store.state.userProfile,
        inputContent: ['你好'],
        inputInfo: '',
        insertInput: ''
      }
    },
    mounted () {
      this.inputInfo = this.inputContent.join('')
    },
    methods: {
      insetInfo () {
        this.inputContent.push(this.insertInput)
        this.inputInfo = this.inputContent.join('')
        console.log(this.inputContent)
      }
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
