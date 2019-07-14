// common webpack config

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
module.exports = {
    publicPath: './', //root
    outputDir: 'dist', //root name
    assetsDir: 'source', //source name
    lintOnSave: false, // close esLint
    productionSourceMap: false, //close SourceMap

    devServer: {
        proxy: {
            // '/test': {
            //     target: 'http://192.168.0.120:4000', // 接口域名
            //     secure: false, // https配置false
            //     changeOrigin: true, //是否跨域
            //     pathRewrite: {
            //         '^/test': '',
            //     }
            // }
        },
        port: 8891,
        open: false
    },

    pluginOptions: { // 第三方插件配置
        // 'style-resources-loader': {
        //     preProcessor: 'scss', //声明类型
        //     'patterns': [
        //     ],
        // }
    },

    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/style/globalSet.scss";`
            }
        }

    },
    chainWebpack: config => {
        // config.module
        //     .rule('HappyPack')
        //     .use('HappyPack')
        //     .test(/\.js$/)
        //     .loader('happypack/loader?id=happyBabel')
        config.plugin('HappyPack').use(HappyPack, [{
            id: 'happyBabel',
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true',
            }],
            threadPool: happyThreadPool,
            verbose: true,
        }])
    }
}