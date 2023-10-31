export function getWeatherSeoul() {
    // OpenWeatherMap API 키
    const apiKeyseoul = 'af424409722cecb0056cea43492fb33c'; // 본인의 API 키로 대체해야 합니다.

    // 도시 이름
    const seoul = 'Seoul'; // 원하는 도시로 변경할 수 있습니다.

    // API 요청을 보내고 데이터를 가져옵니다.
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${seoul}&appid=${apiKeyseoul}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const seoulTemp = data.main.temp; // 온도
            const seoulHumi = data.main.humidity; // 습도

            return { seoulTemp, seoulHumi };
        })
        .catch(error => {
            console.error("날씨 정보를 가져오는데 실패했습니다.", error);
        });
}

// console.log(getWeatherData());
