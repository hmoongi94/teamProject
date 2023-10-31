import { getWeatherSeoul } from "./seoul.js";
import { getWeatherJeju } from "./jejudo.js";
import { getWeatherDaejeon } from "./daejeon.js";

getWeatherSeoul()
 .then((data) => {
  console.log(`서울 온도: ${data.seoulTemp}°C`);
  console.log(`서울 습도: ${data.seoulHumi}%`);
  // 서울 온도, 습도 설정
  const seoulTemperatureElement = document.getElementById("seoul-temperature");
  seoulTemperatureElement.textContent = data.seoulTemp;
  document.getElementById("seoul-humidity").textContent = `${data.seoulHumi}%`;
 })
 .catch((error) => {
  console.error("서울 날씨 정보를 가져오는데 실패했습니다.", error);
 });

getWeatherJeju()
 .then((data) => {
  console.log(`제주 온도: ${data.jejuTemp}°C`);
  console.log(`제주 습도: ${data.jejuHumi}%`);
  // 제주도 온도, 습도 설정s
  document.getElementById(
   "jeju-temperature"
  ).textContent = `${data.jejuTemp}°C`;
  document.getElementById("jeju-humidity").textContent = `${data.jejuHumi}%`;
 })
 .catch((error) => {
  console.error("제주 날씨 정보를 가져오는데 실패했습니다.", error);
 });
getWeatherDaejeon()
 .then((data) => {
  console.log(`대전 온도: ${data.daejeonTemp}°C`);
  console.log(`대전 습도: ${data.daejeonHumi}%`);
  // 대전 온도, 습도 설정
  document.getElementById(
   "daejeon-temperature"
  ).textContent = `${data.daejeonTemp}°C`;
  document.getElementById(
   "daejeon-humidity"
  ).textContent = `${data.daejeonHumi}%`;
 })
 .catch((error) => {
  console.error("대전 날씨 정보를 가져오는데 실패했습니다.", error);
 });
