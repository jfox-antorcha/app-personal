import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StyledIcon } from '..'
import { Colors } from '../../interfaces/colors'
import StyledButton from '../Button'
import StyledText from '../Text'
import icons from '../../constants/icons'

interface Props {
  text: string
  value: boolean
  onValueChange: () => void
  checkedColor?: string
  unCheckedColor?: string
  textColor?: string
}

const CheckBox = ({ text, onValueChange, value, checkedColor, textColor, unCheckedColor }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(
    () => createStyles(colors as Colors, checkedColor, textColor, unCheckedColor),
    [colors, checkedColor, textColor, unCheckedColor]
  )

  return (
    <StyledButton borderless onPress={onValueChange} style={styles.container}>
      <StyledIcon source={value ? icons.radioCheck : icons.radioUnCheck} style={value ? styles.checked : styles.unchecked} size={20} />
      <StyledText sm style={styles.text}>
        {text}
      </StyledText>
    </StyledButton>
  )
}

const createStyles = (
  colors: Colors,
  checkedColor: string | undefined,
  textColor: string | undefined,
  unCheckedColor: string | undefined
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    text: { color: textColor ? textColor : colors.text, marginLeft: 3 },
    checked: { tintColor: checkedColor ? checkedColor : colors.text },
    unchecked: { tintColor: unCheckedColor ? unCheckedColor : colors.text }
  })

export default CheckBox
