module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy({ photos: './photos/' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  return {
    templateFormats: ['md', 'jpg', 'jpeg', 'png', 'gif', 'njk'],
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'app/layouts',
    }
  }
}
