const router = require('koa-router')()
const { 
  createList,
  getAllLists,
} = require('../../controller/list')

router.prefix('/api/lists')

// 创建列表
router.post('/create', async (ctx, next) => {
  const { title, description, userid } = ctx.request.body
  ctx.body = await createList({
    title,
    description,
    userid
  })
})

// 获取所有列表
router.post('/getAll', async (ctx, next) => {
  const { userid } = ctx.request.body
  ctx.body = await getAllLists(userid)
})

module.exports = router