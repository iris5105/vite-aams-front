// src/axios.js
import axios from 'axios';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',  // 요청의 기본 URL을 설정
  timeout: 1000,  // 요청의 타임아웃 시간 설정 (선택사항)
});

export default axiosInstance;