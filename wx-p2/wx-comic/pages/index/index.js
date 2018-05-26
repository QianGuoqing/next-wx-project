Page({
  data: {
    images: [{
      src: '/images/dov-1.png',
      text: '',
      aside: false,
      unique: '0'
    }, {
      src: '/images/dov-2.png',
      text: '过年浪一浪,爆竹好,棒棒',
      aside: false,
      unique: '1'
    }, {
      src: '/images/dov-3.png',
      text: '突然一个想不开,原地爆炸好心塞',
      aside: false,
      unique: '2'
    }, {
      src: '/images/dov-4.png',
      text: '吓死白熊宝宝,变成熊猫大佬',
      aside: false,
      unique: '3'
    }]
  },
  showText(e) {
    let index = e.currentTarget.dataset.index
    let newImages = [...this.data.images]
    newImages[index].aside = !newImages[index].aside
    this.setData({
      images: newImages
    })
  }
})