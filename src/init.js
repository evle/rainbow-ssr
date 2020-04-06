const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const { promisify } = require('util')

let donwloadGitRepo = require('download-git-repo')
let ncp = require('ncp')

donwloadGitRepo = promisify(donwloadGitRepo)
ncp = promisify(ncp)

const DOWNLOAD_DIR = `${
  process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']
}/.template`
const TEMPLATE_REPO = 'rainbow-ssr-template'

async function donwload () {
  const output = `${DOWNLOAD_DIR}/${TEMPLATE_REPO}`
  await donwloadGitRepo('evle/rainbow-ssr-template', output)
  return output
}

async function withLoading (asyncTask, oraMessage) {
  const spinner = ora(oraMessage)
  spinner.start()
  const result = await asyncTask()
  spinner.succeed()
  return result
}

module.exports = async projectName => {
  // Todo
  // 1. check cli version & auto update cli
  // 2. check cache
  // 3. ts template support

  const tempDir = await withLoading(
    donwload,
    'Fetching SSR Project template ...'
  )

  await ncp(tempDir, path.resolve(projectName))

  console.log(chalk.yellow('Done! happy hacking'))
}
