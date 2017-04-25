<template>
  <div class="hello">
    <div class="login-box">
      <div class="login-header">
        <h3>{{msg}}</h3>
      </div>
      <div class="login-body">
        <Row>
          <Col span="20" offset="2">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <Form-item prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </Form-item>
              <Form-item prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click="handleSubmit()">登录</Button>
              </Form-item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '欢迎登陆',
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
    },
    methods: {
      ...mapMutations(['setMenuName']),
      handleSubmit () {
        this.$router.push('/index')
        this.setMenuName('dashboard')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/base.less';
  .hello{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/images/login-bg.png');
    .login-box{
      width: 400px;
      height: 500px;
      background-color: @white;
      margin: 100px auto;
      border-bottom: 1px solid @light-dark;
      .login-header{
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        background-color: @theme-color;
        color: @white;
        font-size: 15px;
        font-weight: normal;
      }
      .login-body{
        margin-top: 30px;
      }
    }
  }

  @media (max-width:480px){
    .hello{
      .login-box{
        width: 100%;
      }
    }
  }
</style>
