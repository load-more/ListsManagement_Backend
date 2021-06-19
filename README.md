# 后端

## 项目开始

### 安装依赖
```
npm install
```

## 启动项目
```
npm run dev
```

**启动项目前，请确保安装了 Nodejs 和 MySQL**

## 所有路由
- 注册
  - http://localhost:3000/api/users/register
  - 参数：{ username, password, nickname }
- 登录
  - http://localhost:3000/api/users/login
  - 参数：{ username, password }
- 添加列表
  - http://localhost:3000/api/lists/create
  - 参数：{ title, description, userid }
- 添加子项
  - http://localhost:3000/api/items/add
  - 参数：{ title, description, userid, listid }
- 修改列表信息
  - http://localhost:3000/api/lists/edit
  - 参数：{ title, description, listid }
- 修改子项信息
  - http://localhost:3000/api/items/edit
  - 参数：{ title, description, itemid, status }
- 获取所有列表
  - http://localhost:3000/api/lists/getAll
  - 参数：{ userid }
- 删除列表
  - http://localhost:3000/api/lists/delete
  - 参数：{ listid }
- 删除子项
  - http://localhost:3000/api/items/remove
  - 参数：{ itemid }
- 完成子项
  - http://localhost:3000/api/items/done
  - 参数：{ itemid }

