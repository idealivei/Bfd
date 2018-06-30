class User
{
  static async check({User,T,Cookie,M})
  {
    let res = await fetch(`http://192.168.1.6/?data=${JSON.stringify(arguments[0])}`);
    let result = await res.json();
    return result;
  }
}
export default User;
