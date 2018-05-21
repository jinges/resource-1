/*
 * @Author: 大明冯 
 * @Date: 2017-12-14 10:10:08 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2017-12-14 15:31:19
 */


const packageJson = require('../../package.json')
const NODE_ENV = process.env.NODE_ENV || 'development'
let env_path = ''

switch (NODE_ENV) {
  case 'production':
    env_path = 'prod.env'
    break;
  case 'test':
    env_path = 'test.env'
    break;
  default:
    env_path = 'dev.env'
    break;
}

let config:any = require(`./${env_path}`)

config = config.default || config

config.name = packageJson.name

export default config