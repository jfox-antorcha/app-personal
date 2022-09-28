import React from 'react'
import { Image, ImageSourcePropType, ImageStyle } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface Props {
  background?: string
  color?: string
  size: number
  source: ImageSourcePropType | undefined
  rounded?: boolean
  style?: ImageStyle
}

const Icon = ({ size, source, background, color, rounded, style }: Props) => {
  const { colors } = useTheme()
  return (
    <Image
      source={source}
      resizeMode='contain'
      style={{
        tintColor: color ? color : colors.text,
        backgroundColor: background ? background : 'transparent',
        width: size,
        height: size,
        borderRadius: rounded ? size : 0,
        ...style
      }}
    />
  )
}

export default Icon
