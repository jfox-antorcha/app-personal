import { StyleSheet } from 'react-native'
import sizes from '../../constants/sizes'
import { Colors } from '../../interfaces/colors'

const createStyles = (colors: Colors, formState: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
      paddingVertical: sizes.padding * 3,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      flex: 2,
      width: sizes.width,
      paddingHorizontal: sizes.padding * 2
    },
    button: {
      alignSelf: 'center',
      marginTop: sizes.padding * 2,
      backgroundColor: formState.formIsValid ? colors.primary : colors.border
    },
    footer: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  })

export default createStyles
