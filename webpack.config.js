//以下配置完毕，执行webpack命令开始打包,前提记得cnpm install 
const path = require('path');//引入路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry:'./src/main.js',
    //输出文件
    output:{
        filename: 'bundle.js', //输出名称，使用到了文件cnpm install file-loader --save-dev
        path: path.resolve(__dirname, 'dist'),  //输出的路径
    },
    mode: 'production',  //生产模式
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader' ]},//匹配css文件,将css转换为js
            //安装依赖cnpm install style-loader  css-loader  --save-dev
            { test: /\.(jpg|png|gif)$/,
                use: 'url-loader',
                options:{limit8*1024,esMoudle:flase,name:'[hash:10].[ext]'}
            },
            //匹配图片文件,图片小于8k,进行base 64处理,取图片hash前10位
            //安装依赖cnpm install url-loader  --save-dev
            { test:/\.html$/,loader:'html-loader'}
            //安装依赖cnpm install html-loader  --save-dev
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),//通过cnpm install html-webpack-plugin --save -dev安装
    ],
    devServer:{
        //项目构建路径
        contentBase:path:path.resolve(__dirname, 'dist'),
    //启动gzip压缩
    compress:true,
    //端口
    port:3000,
    //自动打开浏览器
    open:true,
}
//安装cnpm install webpack-dev-server -g 进行启动，如果执行错误，查看package.json文件安装依赖，cnpm install
}
