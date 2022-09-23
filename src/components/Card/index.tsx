import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import sizes from '../../constants/sizes'
import { Colors } from '../../interfaces/colors'

interface Props {
  children: JSX.Element | JSX.Element[]
  background?: string
}

const Card = ({ children, background }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors, background), [colors, background])
  return <View style={styles.container}>{children}</View>
}

const createStyles = (colors: Colors, background: string | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: background ? background : colors.card,
      borderRadius: sizes.radius,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    }
  })

export default Card
