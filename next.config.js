const optimizedImages = require('next-optimized-images');

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  optimizedImages()
}