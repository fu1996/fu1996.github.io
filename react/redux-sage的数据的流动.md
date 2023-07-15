---
authors: junkui
title: redux-sage的数据的流动
categories:
  - 大前端
  - react
tags:
  - react
typora-root-url: ./redux-sage的数据的流动
date: 2021-03-17 11:16:48
---

# saga 的数据流动

## 1.redux-saga 基础使用

### 安装

```
yarn add redux-saga
```

#### 配置 store/index.js

```js
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

// saga的中间件
import createSagaMiddleware from "redux-saga";
import todoSagas from "./sagas";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

// 创建仓库 并掌管数据
const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(todoSagas);

export default store;
```

#### 新建 sagas.js 进行任务分发处理

```js
import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionType";
import { InitStateAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("api/todolist");
    const action = InitStateAction(res.data);
    // 发送 请求 派发任务
    yield put(action);
  } catch (e) {
    console.log("异步请求失败");
  }
}

// generator 函数
function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;
```

#### actionType.js

```js
export const GET_INIT_LIST = "get_init_list";
```

#### actionCreators.js

```js
// 使用saga 进行任务派发
export const getInitList = () => ({
  type: GET_INIT_LIST,
});
```
