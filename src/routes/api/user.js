const router = require('koa-router')()
const { 
  isExist,
  register,
  login,
} = require('../../controller/user')

router.prefix('/api/users')

// 注册（routes只负责派发路由和获取数据，其他交给controller）
router.post('/register', async (ctx, next) => {
  const { username, password, nickname } = ctx.request.body
  ctx.body = await register({
    username,
    password,
    nickname
  })
})

// 判断用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { username } = ctx.request.body
  ctx.body = await isExist(username)
})

// 登录
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = await login(ctx, username, password)
})

module.exports = router