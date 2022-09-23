import moment from 'moment'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Card, StyledIcon, StyledText } from '../../../../components'
import sizes from '../../../../constants/sizes'
import icons from '../../../../constants/icons'
import { Colors } from '../../../../interfaces/colors'
import { Empleado } from '../../../../interfaces/employee'

interface Props {
  profile: Empleado
}

interface Item {
  title: string
  value: string | number
  width?: number
}

const GeneralInfo = ({ profile }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])

  const Item = ({ title, value, width }: Item) => (
    <View style={{ ...styles.itemContainer, width }}>
      <StyledText sm primary center my textProps={{ numberOfLines: 2 }}>
        {title}
      </StyledText>
      <StyledText sm center>
        {value}
      </StyledText>
    </View>
  )

  return (
    <View style={styles.component}>
      <StyledText md bold my2 mx>
        Información General
      </StyledText>
      <Card>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <StyledIcon source={profile.Foto ? profile.Foto : icons.profile} size={60} rounded />
            <StyledText lg bold accent style={styles.title}>
              {`${profile.Nombre} ${profile.Apellido}`}
            </StyledText>
          </View>
          <View style={styles.rowContainer}>
            <Item title='Documento' value={profile.Documento_Numero} width={sizes.width / 3} />
            <Item title='CUIL' value={profile.CUIL} width={sizes.width / 3} />
            <Item title='Legajo' value={profile.Legajo} width={sizes.width / 3} />
          </View>
          <View style={styles.rowContainer}>
            <Item title='Nacionalidad' value={profile.DescripNacionalidad} width={sizes.width / 3} />
            <Item title='Estado Civil' value={profile.DescripEstadoCivil} width={sizes.width / 3} />
            <Item title='Género' value={profile.DescripGenero} width={sizes.width / 3} />
          </View>
          <View style={styles.rowContainer}>
            <Item title='Fecha Nacimiento' value={moment(profile.FechaNacimiento).format('DD/MM/YYYY')} width={sizes.width / 4} />
            <Item title='Contacto Emergencia' value={profile.Emergencia_Contacto} width={sizes.width / 4} />
            <Item title='Teléfono de emergencia' value={profile.Emergencia_Telefono} width={sizes.width / 4} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    component: {
      marginHorizontal: sizes.padding * 1.5,
      marginBottom: sizes.padding
    },
    container: {
      marginHorizontal: sizes.padding,
      marginVertical: sizes.padding * 2
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: sizes.padding * 0.5
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      alignSelf: 'center',
      width: sizes.width / 2,
      left: -30
    }
  })

export default GeneralInfo
