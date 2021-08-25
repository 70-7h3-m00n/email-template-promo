const fs = require('fs')

fs.readFile('./out/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const emailTemplate =
    data && data.match(/<div id="__next">([\s\S]*?)<\/html>/g)

  const content =
    '<!DOCTYPE html>' +
    emailTemplate[0]
      .substring(17)
      .replace(/(\n|\r|  )/g, '')
      .trim()

  fs.writeFile('./template.html', content, err => {
    if (err) {
      console.error(err)
      return
    }
  })
})
