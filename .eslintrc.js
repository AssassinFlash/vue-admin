// 导出 eslint 配置对象
module.exports = {
  // 表示 eslint 规则被限制到该目录下
  root: true,
  // env 表示启用 eslint 检测的环境
  env: {
    // 在 node 下启用 eslint 检测
    node: true
  },
  // eslint 基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // eslint 启用的规则和错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off' // 解决 eslint 和 prettier 的空格冲突问题
  }
}
