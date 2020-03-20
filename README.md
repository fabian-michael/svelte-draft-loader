<h1 align="center">svelte-draft-loader</h1>

A [webpack](https://github.com/webpack) loader for [svelte-draft](https://github.com/mistlog/svelte-draft).

<h2 align="center">Install</h2>

```
npm install --save-dev svelte-draft-loader

OR

yarn add --dev svelte-draft-loader
```

<h2 align="center">Example Usage</h2>

<strong>webpack.config.js</strong>

```javascript
module.exports = {
    // ...
    
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [
                    {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            hotReload: true
                        }
                    },
                    'svelte-draft-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
    
    // ...
}
```
