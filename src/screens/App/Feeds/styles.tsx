import { StyleSheet } from 'react-native'
import sizes from '../../../constants/sizes'
import { Colors } from '../../../interfaces/colors'

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: sizes.padding
    },
    listContainer: {
      height: sizes.height * 0.94,
      paddingHorizontal: sizes.padding
    }
  })

export default createStyles
