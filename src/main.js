const program = require('commander')
const path = require('path')
const { version } = require('../package.json')

program.version(version)

const Actions = {
  init: {
    description: 'create a SSR project with rainbow'
  }
}

Object.keys(Actions).forEach(k => {
  program
    .command(k)
    .description(Actions[k].description)
    .action(() => {
      require(path.resolve(__dirname, k))(...process.argv.slice(3))
    })
})

program
  .on('--help', () => {
    console.log('\nExample:')
    console.log('\trainbow-cli init [project-name]\n')
  })
  .parse(process.argv)
