import { create } from 'apisauce'

const api = create({
  baseURL: 'http://ws_personal.e-s.com.ar/',
  headers: {
    'Content-Type': 'text/xml; charset=utf-8'
  },
  timeout: 30000
})

export default api
