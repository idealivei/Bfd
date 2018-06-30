<template>
    <div>
      <button @click="checkUserHandler">checkUser</button>
      <div>{{loading}}</div>
      <div>{{msg}}</div>
      <a href="user">用户</a>
      <el-button>默认按钮</el-button>
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
</template>

<script>

  import User from '../../server/User';

  export default {
      name: "home",
      data()
      {
        return {
          msg: '',
          loading: '',
          value2: true
        };
      },
      watch: {
        value2(newVal)
        {
          console.log(newVal);
        }
      },
      methods: {
        async checkUserHandler(e)
        {
          try {
            this.loading = '开始加载数据';
            let user = 'liwei';
            let T = '2018-01-01 12:12:12';
            let Cookie = 'aaa';
            let M = 'U_CKUser';
            let {Cookie:ck,Status,Msg} = await User.check({User:user,T,Cookie,M});
            if(!Msg)throw new Error('no msg');
            this.msg = Msg;
            this.loading = '加载完成';
          }
          catch (e)
          {
            console.log(e);
            this.loading = '加载错误';
          }
        }
      }
    }
</script>

<style scoped>

</style>
