const router = require('koa-router')()
const { 
  addItem,
  editItem,
  removeItem,
  finishItem
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

// 修改子项信息
router.post('/edit', async (ctx, next) => {
  const { itemid, title, description, status } = ctx.request.body
  ctx.body = await editItem({
    itemid,
    title,
    description,
    status
  })
})

// 删除子项
router.post('/remove', async (ctx, next) => {
  const { itemid } = ctx.request.body
  ctx.body = await removeItem(itemid)
})

// 完成子项
router.post('/done', async (ctx, next) => {
  const { itemid } = ctx.request.body
  ctx.body = await finishItem(itemid)
})

module.exports = router