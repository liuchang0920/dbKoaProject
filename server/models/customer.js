// models/user.js
const db = require('../config/db.js'), 
      userModel = '../schema/Customers.js'; // 引入user的表结构
const TodolistDb = db.connectDB; // 引入数据库

const User = TodolistDb.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

const getUserById = async function (id){ // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
  const userInfo = await User.findOne({ // 用yield控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      uid: id
    }
  });

  return userInfo // 返回数据
}

const getUserByName = async function (name){
  const userInfo = await User.findOne({
    where: {
      uname: name
    }
  })

  return userInfo
}

module.exports = {
  getUserById,
  getUserByName
}