// 当你使用 commitizen 进行代码提交时，commitizen 会提交你在提交时填写的必须的提交字段
// 以下配置就是声明 commitizen 的提交步骤
module.exports = {
  // 提交步骤：
  messages: {
    type: '选择提交类型：',
    customScope: '修改范围（可选）：',
    subject: '简要描述提交（必填）：',
    body: '详细描述（可选）：',
    footer: '要关闭的issue（可选）：',
    confirmCommit: '确认使用以上信息提交？（y/n/e/h）'
  },
  // 可选类型
  types: [
    {
      value: 'feat',
      name: 'feat: 新功能'
    },
    {
      value: 'fix',
      name: 'fix: 修复'
    },
    {
      value: 'docs',
      name: 'docs: 文档变更'
    },
    {
      value: 'style',
      name: 'style: 代码格式（不影响代码运行的变更）'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构'
    },
    {
      value: 'perf',
      name: 'perf: 性能优化'
    },
    {
      value: 'test',
      name: 'test: 增加测试'
    },
    {
      value: 'chore',
      name: 'chore: 构建过程或辅助工具的变动'
    },
    {
      value: 'revert',
      name: 'revert: 回退'
    },
    {
      value: 'build',
      name: 'build: 打包'
    }
  ],
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // 限制简要描述长度
  subjectLimit: 72
}
