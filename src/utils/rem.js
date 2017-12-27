(function (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)

  if (window.devicePixelRatio && devicePixelRatio >= 2) {
    var testElem = document.createElement('div')
    testElem.style.border = '.5px solid transparent'
    document.body.appendChild(testElem)
    if (testElem.offsetHeight == 1) {
      document.querySelector('html').classList.add('hairlines')
    }
    document.body.removeChild(testElem)
  }
})(document, window)
