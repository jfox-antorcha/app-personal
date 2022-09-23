import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Card, StyledIcon, StyledText } from '../../../../components'
import sizes from '../../../../constants/sizes'
import icons from '../../../../constants/icons'
import { LstEmpleadosEmail } from '../../../../interfaces/employee'

interface Props {
  emails: LstEmpleadosEmail[]
}

const EmailInfo = ({ emails }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(), [])

  return (
    <View style={styles.container}>
      <StyledText md bold mx my>
        Correos
      </StyledText>
      <Card>
        <View style={styles.cardContainer}>
          <View style={styles.itemContainer}>
            <View style={styles.mail} />
            <StyledText sm bold primary>
              Preferido
            </StyledText>
            <StyledText sm bold primary>
              Activo
            </StyledText>
          </View>
          {emails.map((item) => (
            <View key={item.IdEmpleadosEmails} style={styles.itemContainer}>
              <StyledText sm bold style={styles.mail}>
                {item.Email}
              </StyledText>
              <StyledIcon
                source={item.Preferido ? icons.check : icons.close}
                size={24}
                style={styles.icon}
                color={item.Preferido ? colors.success : colors.alert}
              />
              <StyledIcon
                source={item.Activo ? icons.check : icons.close}
                size={24}
                style={styles.icon}
                color={item.Activo ? colors.success : colors.alert}
              />
            </View>
          ))}
        </View>
      </Card>
    </View>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: sizes.padding * 1.5,
      paddingTop: sizes.padding * 0.5,
      paddingBottom: sizes.padding
    },
    cardContainer: {
      paddingHorizontal: sizes.padding * 1.5,
      paddingVertical: sizes.padding * 1.5
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    mail: { width: sizes.width / 2 },
    icon: { marginRight: sizes.padding }
  })
export default EmailInfo
