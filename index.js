const fs = require('fs')
const path = require('path')
const shelljs = require('shelljs')
const chalk  = require('chalk')
const inquirer = require('inquirer')

shelljs.echo(chalk.blue('chalk'))

inquirer.prompt([
	{
		type: 'list',
		name: 'belongModule',
		message: chalk.cyan('模块名称'),
		description: '123123',
		choices: ['Asset', 'Home'],
	},
	{
		type: 'input',
		name: 'moduleName',
		message: chalk.cyan('模块名称'),
	},
	{
		type: 'list',
		name: 'isNewFolder',
		message: chalk.cyan('是否需要新建文件夹'),
		choices: ['Yes', 'No']
	}
]).then(({ belongModule, moduleName, isNewFolder }) => {
	if (isNewFolder === 'Yes') {
		shelljs.mkdir('-p', path.resolve(`./src/views/${belongModule}/${moduleName}`))
		shelljs.cp(path.resolve('./template/page.vue'), path.resolve(`./src/views/${belongModule}/${moduleName}/index.vue`))
	} else {
		shelljs.cp(path.resolve('./template/page.vue'), path.resolve(`./src/views/${belongModule}/${moduleName}.vue`))
	}
})

// shelljs.touch(path.resolve('./src/views/page.vue'))



