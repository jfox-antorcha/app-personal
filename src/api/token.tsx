import api from '.'
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

  return api
    .post('PersonalWS.asmx', xmlData)
    .then((resp) => {
      const xml = new RXParser().parseFromString(resp.data)
      return xml
    })
    .catch((err) => {
      throw new Error(err)
    })
}
