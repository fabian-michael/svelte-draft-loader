[![Build Status](https://travis-ci.org/Mycl95/svelte-draft-loader.svg?branch=master)](https://travis-ci.org/Mycl95/svelte-draft-loader)

<h1 align="center">svelte-draft-loader</h1>

A [webpack](https://github.com/webpack) loader for [svelte-draft](https://github.com/mistlog/svelte-draft).

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
        test: /\.tsx$/,
        use: 'svelte-draft-loader'
      },
      {
        test: /\.svelte$/,
        use: 'svelte-loader',
        // svelte config see ...
      }
    ]
  }
}
```

Please see https://github.com/sveltejs/svelte-loader for svelte-loader configuration.
