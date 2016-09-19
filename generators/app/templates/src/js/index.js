/*
* The Entry file
*/

// import 'babel-polyfill'
import config from './config'

let title = 'Hello ' + config.APP_NAME + '!'
document.getElementById('title').innerHTML = title

