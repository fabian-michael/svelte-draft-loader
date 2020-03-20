<h1 align="center">svelte-draft-loader</h1>
<h2 align="center">Install</h2>

```
npm install --save-dev svelte-draft-loader

OR

yarn add --dev svelte-draft-loader
```

<h2 align="center">Configuration</h2>
<strong>webpack.config.js</strong>

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  }
}
```
