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
      paddingHorizontal: sizes.padding
    },
    listContainer: {
      paddingVertical: sizes.padding,
      height: sizes.height * 0.94
    },
    listContent: {
      paddingBottom: sizes.padding * 16
    },
    cardContainer: {
      marginHorizontal: sizes.padding,
      paddingVertical: sizes.padding
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: sizes.padding,
      marginVertical: sizes.padding
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardTitle: {
      padding: sizes.padding
    }
  })

export default createStyles
