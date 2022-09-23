import api from '.'
import { DOMParser } from 'xmldom'

export const getEmpleado = (token: string, idEmpleado: number) => {
  let xmlData = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
          <soapenv:Header>
            <tem:CabeceraSoapToken>
                <tem:TokenAcceso>${token}</tem:TokenAcceso>
            </tem:CabeceraSoapToken>
          </soapenv:Header>
          <soapenv:Body>
            <tem:GetEmpleado>
                <tem:IdEmpleado>${idEmpleado}</tem:IdEmpleado>
            </tem:GetEmpleado>
          </soapenv:Body>
      </soapenv:Envelope>
  `

  return api
    .post('PersonalWS.asmx', xmlData)
    .then((resp) => {
      const xml = new DOMParser().parseFromString(resp.data)
      return xml
    })
    .catch((err) => {
      throw new Error(err)
    })
}
