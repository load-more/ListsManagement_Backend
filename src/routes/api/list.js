const router = require('koa-router')()
const { 
  createList,
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

module.exports = router