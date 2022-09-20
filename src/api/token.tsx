import axios from 'axios'
import RXParser from 'react-xml-parser'

export const getTokenAccesso = async (user: string, password: string) => {
  let xmlData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header>
     <tem:CabeceraSoapAcceso>
        <tem:Usuario>${user}</tem:Usuario>
        <tem:Password>${password}</tem:Password>
     </tem:CabeceraSoapAcceso>
  </soapenv:Header>
  <soapenv:Body>
     <tem:GetTokenAcceso/>
  </soapenv:Body>
</soapenv:Envelope>`

  let config = {
    method: 'POST',
    url: 'http://ws_personal.e-s.com.ar/PersonalWS.asmx',
    data: xmlData,
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://tempuri.org/GetTokenAcceso'
    }
  }

  return axios(config)
    .then((resp) => {
      const xml = new RXParser().parseFromString(resp.data)
      return xml
    })
    .catch((err) => {
      throw new Error(err)
    })
}
