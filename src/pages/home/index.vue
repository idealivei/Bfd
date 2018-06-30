<template>
    <div>
      <button @click="checkUserHandler">checkUser</button>
      <div>{{msg}}</div>
    </div>
</template>

<script>

  import User from '../../server/User';

    export default {
      name: "home",
      data()
      {
        return {
          msg: ''
        };
      },
      methods: {
        async checkUserHandler(e)
        {
          try {
            let user = 'liwei';
            let T = '2018-01-01 12:12:12';
            let Cookie = 'aaa';
            let M = 'U_CKUser';
            let {Cookie:ck,Status,Msg} = await User.check({User:user,T,Cookie,M});
            if(!Msg)throw new Error('no msg');
            this.msg = Msg;
          }
          catch (e)
          {
            console.log(e);
          }
        }
      }
    }
</script>

<style scoped>

</style>
