export function helloWord() {
  return 'holle word'
}
export function component() {
  const el = document.createElement("div")
  el.innerHTML = '好饿啊！好像吃饭aaaaaa'
  el.classList.add('hello')
  return el
}