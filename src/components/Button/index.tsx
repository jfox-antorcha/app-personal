import { useTheme } from '@react-navigation/native'
import React, { useCallback, useMemo } from 'react'
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import sizes from '../../constants/sizes'
import { Colors } from '../../interfaces/colors'
import getCustomStyles from '../../utils/getCustomStyles'
import { ButtonProps, VARIANTS } from './interfaces'

const getColors = (colorsObj: any) =>
  Object.keys(colorsObj).reduce(
    (colors, color) => ({
      ...colors,
      ...{
        [color]: {
          backgroundColor: colorsObj[color],
          borderColor: colorsObj[color]
        }
      }
    }),
    {}
  )

const StyledButton = (props: ButtonProps) => {
  const { colors } = useTheme()
  const styles = useMemo(() => createStyles(colors as Colors), [colors])
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props])
  const { children, onPress, style, loading = false, loadingColor = colors.surface, disabled = false, touchProps } = props
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.base, customStyles(), style]}
      disabled={disabled || loading}
      onPress={onPress}
      {...touchProps}>
      {!!loading && <ActivityIndicator color={loadingColor} />}
      {children}
    </TouchableOpacity>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
      borderRadius: sizes.radius,
      justifyContent: 'center',
      alignItems: 'center',
      height: sizes.touchableHeight,
      paddingHorizontal: sizes.padding
    },
    sz80: { width: sizes.width * 0.8 },
    sz60: { width: sizes.width * 0.6 },
    sz40: { width: sizes.width * 0.4 },
    sz30: { width: sizes.width * 0.3 },
    icon: {
      width: sizes.touchableHeight,
      height: sizes.touchableHeight,
      borderRadius: sizes.touchableHeight
    },
    ...getColors({
      primary: colors.primary,
      accent: colors.accent,
      success: colors.success,
      alert: colors.alert,
      warn: colors.warn
    }),
    borderless: { borderWidth: 0, backgroundColor: 'transparent' },
    outline: { borderWidth: 1, backgroundColor: 'transparent' },
    mx: { marginHorizontal: sizes.padding },
    my: { marginVertical: sizes.padding }
  })
export default StyledButton
