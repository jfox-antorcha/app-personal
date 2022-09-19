import axios from 'axios';
import RXParser from 'react-xml-parser';

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
</soapenv:Envelope>`;

  let config = {
    method: 'POST',
    url: 'http://ws_personal.e-s.com.ar/PersonalWS.asmx',
    data: xmlData,
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://tempuri.org/GetTokenAcceso',
    },
  };

  return axios(config)
    .then(resp => {
      const xml = new RXParser().parseFromString(resp.data);
      const userData = {
        id: xml.children[0].getElementsByTagName('Id')[0].value,
        name: xml.children[0].getElementsByTagName('Nombre')[0].value,
        lastName: xml.children[0].getElementsByTagName('Apellidos')[0].value,
        email: xml.children[0].getElementsByTagName('Email')[0].value,
        role: xml.children[0].getElementsByTagName('Rol')[0].value,
        token: xml.children[0].getElementsByTagName('Token')[0].value,
        employeeId: xml.children[0].getElementsByTagName('IdEmpleado')[0].value,
        userId: xml.children[0].getElementsByTagName('IdUsuario')[0].value,
        tokenExpiration:
          xml.children[0].getElementsByTagName('FechaExpiracion')[0].value,
      };
      return userData;
    })
    .catch(err => {
      throw new Error(err);
    });
};
