export const getWeatherDaejeon = async () => {
  const daejeon_apiKey = 'af424409722cecb0056cea43492fb33c'; // 본인의 API 키로 대체
  const deajeon_city = 'daejeon'; // 원하는 도시명으로 변경 가능

  // API 요청
  try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${deajeon_city}&appid=${daejeon_apiKey}&units=metric`)

      if (!response.ok) {
        throw new Error ("네트워크 오류 발생");
      }

      const data = await response.json();
      // console.log(data);
      const daejeonTemp = data.main.temp; // 온도
      const daejeonHumi = data.main.humidity; // 습도
      return { daejeonTemp, daejeonHumi };

    }
    catch(error) {
      console.error("날씨 정보 가져올 수 없습니다.");
    }
}

// ! 작성법, then을 통한 result.temp 혹은 result.humi 가 필요하다. 
// deajeonFetch().then( result => console.log(result.temperature, result.humidity));

