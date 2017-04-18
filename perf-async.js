const gs = require('../')
const fs = require('fs')
const childProcess = require('child_process')

process.chdir(__dirname)

const pdf = 'node-love-ghostscript.pdf'
const png = 'node-love-ghostscript-async.png'
const cmd = `-sDEVICE=pngalpha -o ${png} -sDEVICE=pngalpha -r144 ${pdf}`

const start = new Date()
childProcess.exec('gs ' + cmd, (err, stdout, stderr) => {
    if (err) {
        console.log('Error in ececuting ghostscript command')
    }
    const end = new Date()
    console.log(`Ghostscript command executed in => ${ end - start } ms`)
})



