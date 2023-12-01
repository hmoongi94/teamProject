// //* 컴포넌트
import { introduceComponent } from "./introduceComponent.js";
import { render } from "./render.js";

// //* 데이터
import { introduceData } from "../data/introduce.js"

export function onMenuClick(hash) {
  const container = document.getElementById('root')
  // 각 메뉴 항목을 클릭할 때 호출되는 함수
  // hash에 따라 내용을 동적으로 변경할 수 있습니다.
  // 여기에서는 단순히 콘솔에 로그를 출력하는 예시를 작성했습니다.
  if(container.children.length >=2 ){
    container.removeChild(container.children[1])
  }
  
  let withoutHashtag = hash.slice(1);
  const introducePersonData = introduceData[withoutHashtag]
  // console.log(introducePersonData)

  const introduceVirtualDom = introduceComponent(introducePersonData)
  container.appendChild(render(introduceVirtualDom))
}