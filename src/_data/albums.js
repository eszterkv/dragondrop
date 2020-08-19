const fs = require('fs')
const path = require('path')

function getAlbums() {
  const dirs = fs.readdirSync(path.join(__dirname, '..', '/photos/'))
  return dirs.map(dir => {
    const photos = fs.readdirSync(path.join(__dirname, '..', `/photos/${dir}`))
      .filter(file => /(jpe?g|png|gif)/.test(file))
    let title = dir
    let description = ''

    try {
      const info = require(`../photos/${dir}/info.json`)
      title = info.title
      description = info.description
    } catch (e) {
      // do nothing
    }
    return { photos, title, description, slug: dir  }
  })
}

module.exports = getAlbums
