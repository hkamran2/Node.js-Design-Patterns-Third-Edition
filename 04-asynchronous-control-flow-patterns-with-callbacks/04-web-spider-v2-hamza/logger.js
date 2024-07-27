import chalk from 'chalk'

const log = console.log

const Logger = {
  success: (message = '', ...params) => log(chalk.green(`✅ ${message}`), ...params),
  error: (message = '', ...params) => log(chalk.red(`❌ ${message}`), ...params),
  info: (message = '', ...params) => log(chalk.white(`💬 ${message}`), ...params)
}

export { Logger }
