# jwt登陆认证模板

###原理

登陆之后，会在本地的localstorage保存token，以后每次请求都会带上这个token。在这里我们使用vuex存储状态，一旦请求成功保存token，如下所示：

```javascript
Login (state,payload) {
    state.user=payload["user"]
    state.token=payload["token"]
    console.log("!!!",state.token);
    window.sessionStorage.setItem('token',state.token);
    window.sessionStorage.setItem('user', state.user);
  }
```

每次请求，使用axios添加请求头

```javascript
instance.interceptors.request.use(
  config => {
    if(store.state.token){
      config.headers.Authorization = store.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
```

### 使用

```
npm install
npm run dev
```

mock的json用户名和密码分别为aaa,如下所示：

![](https://raw.githubusercontent.com/Neilai/jwt-login/master/img/1.png)

登录后如下所示：

![](https://raw.githubusercontent.com/Neilai/jwt-login/master/img/2.png)



