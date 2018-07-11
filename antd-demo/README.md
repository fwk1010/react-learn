

```bash
yarn start
```

**由create-react-app 改造而来，主要因为antd使用less，需要修改配置**

### step1 
<code>yarn run eject</code> 把config暴露出来  
### step2 
<code>yarn add babel-plugin-import --dev</code>  
### step3 
新建.babelrc文件，内容是  
```js
{
   "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
}
```
### step4 
<code>yarn add less-loader less --dev</code>  
### step5
修改config文件夹下的webpack.config.dev.js和webpack.config.prod.js文件(都需要修改) 

查找 ：exclude 

原本的 exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/], 
修改为 exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.less$/]

查找：test: /.css$/ 

原本的 test: /\.css$/, 
修改为 test: /\.(css|less)$/，
添加loader，
```js
{
    loader: require.resolve('less-loader'),
    options: {javascriptEnabled: true}
}
```
