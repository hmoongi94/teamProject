import { menuComponent } from "./js-module/menuComponent.js"
import { render } from "./js-module/render.js"
import { onMenuClick } from "./js-module/onMenuClick.js"

export function load(){
  document.addEventListener('DOMContentLoaded',function(){

    const stateData = [
      { hash: '#김현', text: '김현' },
      { hash: '#이민구', text: '이민구' },
      { hash: '#윤준현', text: '윤준현' },
      { hash: '#신동현', text: '신동현' },
      { hash: '#홍문기', text: '홍문기' }
    ]

    const virtualDom = menuComponent(stateData, onMenuClick)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))
  })
}