<template>
	<view style="padding: 0 20rpx;">
    <u-toast ref="uToast"></u-toast>
		<view class="login-container">
      <view style="width: 80%; display: flex;align-items: center;">
        <text style="width: 20%; margin-right: 10rpx; text-align: end;">用户名</text>
        <view style="width: 80%;">
            <u--input
                v-model="userInfo.username"
                placeholder="请输入用户名"
                border="surround"
                shape="circle"
                clearable
              ></u--input>
        </view>
      </view>
      <view style="width: 80%; margin-top: 30rpx;display: flex; align-items: center;">
        <text style="width: 20%; margin-right: 10rpx;text-align: end;">手机号</text>
        <view style="width: 80%;">
          <u--input
              v-model="userInfo.phone"
              placeholder="请输入电话号码"
              border="surround"
              shape="circle"
              type="number"
              clearable
            ></u--input>
        </view>
      </view>
      <view style="width: 80%; margin-top: 30rpx;display: flex; align-items: center;">
          <text style="width: 20%; margin-right: 10rpx;text-align: end;">密码</text>
          <view style="width: 80%;">
            <u--input
                v-model="userInfo.password"
                placeholder="请输入密码"
                border="surround"
                shape="circle"
                type="password"
                clearable
              ></u--input>
          </view>
      </view>
      <view style="margin-top: 60rpx;width: 60%;">
          <u-button @click="commit" type="primary" text="注册"></u-button>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userInfo:{
          phone:'',
          username:'',
          password:''
        }
			}
		},
		methods: {
      commit(){
        var reg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(this.userInfo.username == ''){
          this.$refs.uToast.show({
          	type: 'error',
          	icon: false,
          	message: "请输入用户名",
          })
          return
        }else if (!reg.test(this.userInfo.phone)) {
            this.$refs.uToast.show({
            	type: 'error',
            	icon: false,
            	message: "请输入正确的手机号码",
            })
            return
        }else if(this.userInfo.password==''){
          this.$refs.uToast.show({
          	type: 'error',
          	icon: false,
          	message: "请输入密码",
          })
          return
        }else{
          console.log(this.userInfo)
          this.$request('/user/register',this.userInfo,'POST')
          .then(res=>{
            console.log(res)
            if(res.code == 200){
                uni.navigateBack({})  
            }
          })
        }
      },
		}
	}
</script>

<style>
  .login-container{
   display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50rpx 20rpx ;
    margin-top: 300rpx;
    border-radius: 30rpx;
    background-color: #FFFFFF;
  }
</style>
