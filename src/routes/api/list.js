const router = require('koa-router')()
const { 
  createList,
  getAllLists,
  editList,
  deleteList
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

// 修改列表信息
router.post('/edit', async (ctx, next) => {
  const { listid, title, description } = ctx.request.body
  ctx.body = await editList({
    listid,
    title,
    description
  })
})

// 删除列表
router.post('/delete', async (ctx, next) => {
  const { listid } = ctx.request.body
  ctx.body = await deleteList(listid)
})

module.exports = router