import { StyleSheet } from 'react-native'
import { Colors } from '../../interfaces/colors'
import sizes from '../../constants/sizes'

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: sizes.padding
    },
    leftComponent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    rightComponent: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default createStyles
