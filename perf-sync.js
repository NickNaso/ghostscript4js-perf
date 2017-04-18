const gs = require('../')
const fs = require('fs')

process.chdir(__dirname) 

const pdf1st = 'node-love-ghostscript.pdf'
const pdf2nd = 'node-love-ghostscript.1.pdf'
const pngASync1st = 'node-love-ghostscript-sync.png'
const pngAsync2nd = 'node-love-ghostscript-async.png'
const cmdAsync1st = `-sDEVICE=pngalpha -o ${pngASync1st} -sDEVICE=pngalpha -r144 ${pdf1st}`
const cmdAsync2nd = `-sDEVICE=pngalpha -o ${pngAsync2nd} -sDEVICE=pngalpha -r144 ${pdf2nd}`


 gs.execute(cmdAsync1st)
 .then(() => {
    console.log('cmdAsync1st command successfully executed')
 })
 .catch((err) => {
    console.error('cmdAsync1st command error => ', err)
 })


setTimeout(function () {
    gs.execute(cmdAsync2nd)
 .then(() => {
    console.log('cmdAsync2nd command successfully executed')
 })
 .catch((err) => {
    console.error('cmdAsync2nd command error => ', err)
 })

}, 0)

gs.execute(cmdAsync2nd)
 .then(() => {
    console.log('cmdAsync2nd command successfully executed')
 })
 .catch((err) => {
    console.error('cmdAsync2nd command error => ', err)
 })

 gs.executeSync(cmdAsync2nd)

  
  

