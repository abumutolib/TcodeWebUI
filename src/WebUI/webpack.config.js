/*********************************
* Environment and imports
*********************************/
const environment = process.env.NODE_ENV || "development";
const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*********************************
* Entry
*********************************/
const entry = {
    "main": ["./Source/main.site.ts", "./Source/main.site.scss"],
    "tutorial": ["./Source/tutorial.site.ts", "./Source/tutorial.site.scss"],
    "ajax-tutorial-page": "./Source/pages/tutorial/detail.page.ts",
    "righ-editor": ["./Source/rich-editor/rich-editor.component.ts", "./Source/rich-editor/rich-editor.component.scss"],
    "account": ["./Source/account.site.ts", "./Source/account.site.scss"]
};

/*********************************
* Module
*********************************/
const _module = {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                "ts-loader"
            ]
        },
        {
            test: /\.scss$/,
            exclude: ["/node_modules/"],
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        },
        {
            test: /\.(mp4|ogg|svg|eot|ttf|woff|woff2|jpg|png)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: "../img",
                esModule: false
            }
        }
    ]
};

/*********************************
* Optimization
*********************************/
const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
        }
    }
};

/*********************************
* Output
*********************************/
const output = {
    filename: "[name].bundle.js",
    path: __dirname + "/wwwroot/js/",
    pathinfo: true
};

if (environment === "production") {
    output.filename = "[name].bundle.min.js";
    output.pathinfo = false;
} else if (environment === "development") {
    output.publicPath = "/js/";
}

/*********************************
* Plugins
*********************************/
const plugins = [
    new ExtractTextPlugin({
        filename: environment === "production" ? "../css/[name].bundle.min.css" : "../css/[name].bundle.css",
        disable: false,
        allChunks: false
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    }),
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }
    })
];

/*********************************
* Resolve
*********************************/
const resolve = {
    extensions: [".ts", ".js"]
};

/*********************************
* Exports
*********************************/
module.exports = {
    entry: entry,
    output: output,
    resolve: resolve,
    mode: environment,
    module: _module,
    optimization: optimization,
    plugins: plugins,
    watch: false
};