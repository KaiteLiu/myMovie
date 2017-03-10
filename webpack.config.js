module.exports = {
  //配置入口文件，入口文件可以以对象的形式配置，也可以以数组的形式配置,后缀名可以省略可以对象形式配置入口，也可以数组形式配置入口
  entry: './index.js',
  //输出文件出口
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [//加载器
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  }
}
