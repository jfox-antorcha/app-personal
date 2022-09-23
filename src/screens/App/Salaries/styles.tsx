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
      paddingHorizontal: sizes.padding * 2
    },
    listContainer: {
      paddingVertical: sizes.padding,
      marginBottom: sizes.padding * 12
    },
    listContent: {
      paddingBottom: sizes.padding * 3
    },
    cardContainer: {
      paddingVertical: sizes.padding
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: sizes.padding
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
