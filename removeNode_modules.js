const fs = require('fs')

const sourceDir = './'

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.log(err)
    return
  }

  files.map((e) => {
    const dir = e
    const dirName = `${__dirname}/${dir}`

    fs.readdir(dirName, (errm, file) => {
      if (!errm) {

      const dir = file.filter(e => e === 'node_modules')
      const nodeModules = `${dirName}/${dir}/`

        console.log(nodeModules)
      
      fs.rmdir(nodeModules, { recursive: true, force: true }, () => {
        console.log('rm')
      })

    }
  })
  })
})

