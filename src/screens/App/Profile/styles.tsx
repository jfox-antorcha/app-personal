import { StyleSheet } from 'react-native'
import sizes from '../../../constants/sizes'
import { Colors } from '../../../interfaces/colors'

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: sizes.padding
    },
    body: {
      flex: 4,
      paddingVertical: sizes.padding,
      height: sizes.height * 0.94
    },
    scrollContent: {
      paddingBottom: sizes.padding * 10
    }
  })

export default createStyles
