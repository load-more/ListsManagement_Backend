const router = require('koa-router')()
const { 
  addItem,
} = require('../../controller/item')

router.prefix('/api/items')

// 添加子项
router.post('/add', async (ctx, next) => {
  const { title, description, userid, listid } = ctx.request.body
  ctx.body = await addItem({
    title,
    description,
    userid,
    listid,
    status: 0
  })
})

module.exports = router