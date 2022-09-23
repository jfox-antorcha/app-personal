import React, { useCallback, useMemo, memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import getCustomStyles from '../../utils/getCustomStyles'
import { VARIANTS, CustomProps, NumberObj, StringObj } from './interfaces'
import fonts from '../../constants/fonts'
import { Colors } from '../../interfaces/colors'
import sizes from '../../constants/sizes'

const getColors = (colorsObj: StringObj) =>
  Object.keys(colorsObj).reduce((colors, color) => ({ ...colors, ...{ [color]: { color: colorsObj[color] } } }), {})

const getSizes = (sizeObj: NumberObj) =>
  Object.keys(sizeObj).reduce((sizes, size) => ({ ...sizes, ...{ [size]: { fontSize: sizeObj[size] } } }), {})

const StyledText = (props: CustomProps) => {
  const { children, style, textProps } = props
  const { colors } = useTheme()
  const styles = useMemo(() => createStyles(colors as Colors), [colors])
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props])
  return (
    <Text style={[styles.base, customStyles(), style]} {...textProps}>
      {children}
    </Text>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    base: {
      ...fonts.regular,
      fontSize: fonts.sizes.rg,
      color: colors.text
    },
    bold: { ...fonts.bold, fontWeight: 'bold' },
    regular: { ...fonts.regular, fontWeight: 'normal' },
    light: { ...fonts.light, fontWeight: '200' },
    medium: { ...fonts.regular, fontWeight: '500' },
    left: { alignSelf: 'flex-start' },
    center: { alignSelf: 'center', textAlign: 'center' },
    right: { alignSelf: 'flex-end' },
    ...getColors({
      accent: colors.accent,
      error: colors.alert,
      surface: colors.surface,
      dimmed: colors.dimmedText,
      primary: colors.primary,
      success: colors.success,
      black: colors.black
    }),
    ...getSizes({
      xl: fonts.sizes.xl,
      bg: fonts.sizes.bg,
      lg: fonts.sizes.lg,
      md: fonts.sizes.md,
      rg: fonts.sizes.rg,
      sm: fonts.sizes.sm,
      xs: fonts.sizes.xs
    }),
    mx: { marginHorizontal: sizes.padding },
    my: { marginVertical: sizes.padding * 0.5 },
    my2: { marginVertical: sizes.padding }
  })

export default StyledText
