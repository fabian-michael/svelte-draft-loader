const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte', '.ts', '.tsx'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },

    module: {
        rules: [
            {
                test: /.ts$/,
                use: path.resolve('../src/index.js')
            },
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
                    {
                        loader: path.resolve('../src/index.js'),
                    }
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
    },

    plugins: [
        new MiniCssExtractPlugin( {
            filename: 'bundle.css'
        })
    ],

    mode,
}