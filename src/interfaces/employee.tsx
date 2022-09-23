export interface Empleado {
  IdEmpleados: number
  IdClientes: number
  Apellido: string
  Nombre: string
  Legajo: string
  CUIL: number
  FechaNacimiento: string
  IdNacionalidad: number
  IdGeneros: number
  IdEstadoCivil: number
  IdTiposDocumentos: number
  Documento_Numero: string
  Emergencia_Contacto: string
  Emergencia_Telefono: string
  Foto: string
  Firma: string
  Observaciones: string
  Activo: boolean
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
  LstEmpleadosAfip: string
  LstEmpleadosBancos: LstEmpleadosBanco[]
  LstEmpleadosDomicilios: LstEmpleadosDomicilio[]
  LstEmpleadosEmails: LstEmpleadosEmail[]
  LstEmpleadosHistorial: LstEmpleadosHistorial[]
  LstEmpleadosObraSocial: any[]
  LstEmpleadosPuestos: LstEmpleadosPuesto[]
  LstEmpleadosSectores: any[]
  LstEmpleadosSindicatos: any[]
  LstEmpleadosTelefonos: any[]
  LstEmpleadosUbicaciones: any[]
  LstRecibos: LstRecibo[]
  DescripNacionalidad: string
  DescripGenero: string
  DescripEstadoCivil: string
  DescripTipoDocumento: string
}

export interface LstEmpleadosBanco {
  IdEmpleadosBancos: number
  IdEmpleados: number
  IdBancos: number
  IdBancosTiposCuenta: number
  Banco_Numero: string
  Banco_CBU: string
  Alias1: string
  FechaDesde: string
  FechaHasta: string
  Observaciones: string
  Activo: boolean
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
}

export interface LstEmpleadosDomicilio {
  IdEmpleadosDomicilios: number
  IdEmpleados: number
  Calle: string
  Numero: string
  Otros: string
  CP: string
  Barrio: string
  Localidad: string
  IdProvincias: number
  FechaDesde: string
  FechaHasta: string
  Observaciones: string
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
}

export interface LstEmpleadosEmail {
  IdEmpleadosEmails: number
  IdEmpleados: number
  Email: string
  Preferido: boolean
  Activo: boolean
  Observaciones: string
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
}

export interface LstEmpleadosHistorial {
  IdEmpleados_Historiales: number
  IdCliente: number
  IdEmpleado: number
  Fecha_Desde: string
  Fecha_Hasta: string
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
}

export interface LstEmpleadosPuesto {
  IdEmpleadosPuestos: number
  IdEmpleados: number
  IdSectores: number
  FechaDesde: string
  FechaHasta: string
  Observaciones: string
  Modif_FYH: string
  Modif_Usuario: string
  Modif_Ip: string
  Modif_Pc: string
}

export interface LstRecibo {
  IdRecibos_Encabezado: number
  idRecibos_Periodo: number
  Legajo: string
  Fecha: string
  DepoCargas: string
  FDepoCargas: string
  Nombre: string
  fIngreso: string
  Cuil: number
  HaberesconAporte: string
  HaberessinAporte: string
  Descuentos: string
  NetoPagar: string
  EnLetras: string
  Categoria: string
  CentroCosto: string
  SueldoBasico: string
  LugarPago: string
  NombreBanco: string
  NroTipoCta: string
  ObsNormales: string
  ObsResaltadas: string
  Imagen: string
  NombreArchivo: string
  ExtensionArchivo: string
  DescargadoVisto: boolean
  LstRecibosDetalles: LstRecibosDetalle[]
  LstRecibosFirmantes: string
  LstRecibosPeriodos: string
}

export interface LstRecibosDetalle {
  IdRecibos_Detalles: number
  idRecibos_Encabezado: number
  Texto: string
  Codigo: string
  Primero: string
  Segundo: string
  Tercero: string
}
