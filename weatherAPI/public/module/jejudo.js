
export function getWeatherJeju() {
  // OpenWeatherMap API 키
  const apiKeyjeju = '13e787bc80632c2e192c0e6abff23bee'; // 본인의 API 키로 대체해야 합니다.
  // 도시 이름
  const jeju = 'jeju'; // 원하는 도시로 변경할 수 있습니다.
  // API 요청을 보내고 데이터를 가져옵니다.
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${jeju}&appid=${apiKeyjeju}&units=metric`)
      .then(response => response.json())
      .then(data => {
          const jejuTemp = data.main.temp; // 온도
          const jejuHumi = data.main.humidity; // 습도
          // console.log(jejuTemp, jejuHumi)
          return { jejuTemp, jejuHumi };
      })
      .catch(error => {
          console.error("날씨 정보를 가져오는데 실패했습니다.", error);
      });
}

// console.log(getWeatherJejuData())
// 비동기작업을 수행하기 때문에 fetch함수의 응답을 기다리지않고 바로 다음 코드를 수행해서 undefined가 나옴.