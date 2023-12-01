//* js 모듈
import { menuComponent } from "./js-module/menuComponent.js"
import { render } from "./js-module/render.js"
import { onMenuClick } from "./js-module/onMenuClick.js"

//* data
import { menuData } from "./data/menu.js"

export function load(){
  document.addEventListener('DOMContentLoaded',function(){
    const container = document.getElementById('root')

    const menuVirtualDom = menuComponent(menuData, onMenuClick)
    container.appendChild(render(menuVirtualDom))

    // const introduceVirtualDom = introduceComponent(introduceData, onMenuClick)
    // container.appendChild(render(introduceVirtualDom))
    
    
  })
}