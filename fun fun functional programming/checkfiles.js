// const folder = '/'   // system root
// const folder = './'  // folder root
// const folder = '../' // 1 up

const folder = process.argv[2]
const fs = require('fs')

if(folder === undefined) {
  console.log('Specify a folder path')
} else {
  fs.readdir(folder, (err, files) => {
    if(files === undefined) {
      console.log('Specify a folder path')
    } else {
      files.forEach(file => {
        console.log(file)
      })
    }
  })
}
