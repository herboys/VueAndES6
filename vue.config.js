const path = require("path");
module.exports = {
    configureWebpack: config => {
        config.externals = {
            AMap: "window.AMap"
        };
    },
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias.set("@", path.join(__dirname, "./src"));
        // .set('assets', path.join(__dirname, './src/assets'))
        // .set('common', path.join(__dirname, './src/common'))
        // .set('styles', path.join(__dirname, './src/assets/styles'));
    },
    runtimeCompiler: true,
    publicPath: './',
// 是否生成map文件
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        port: 8089, // 端口号
        host: "0.0.0.0",
        https: false,
        open: false,
        hotOnly: false,
        proxy: {
            "/api": {
                // target: "http://10.237.205.162:8085/",
                target: "http://10.237.120.74:8089/crossdoorscreen/api",
                ws: true,
                changeOrigin: true,
                pathRewrite: {"^/api": ""}
            },

        } // 配置多个代理
    }
};
