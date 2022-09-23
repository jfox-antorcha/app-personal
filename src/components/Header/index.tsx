import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import StyledText from '../Text'
import StyledIcon from '../Icon'
import createStyles from './styles'
import icons from '../../constants/icons'
import { Colors } from '../../interfaces/colors'
import StyledButton from '../Button'

interface Props {
  backButton?: boolean
  title: string
  right?: JSX.Element | JSX.Element[]
}

const Header = ({ backButton, title, right }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])

  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
        {backButton && (
          <StyledButton icon onPress={() => {}}>
            <StyledIcon source={icons.back} size={24} />
          </StyledButton>
        )}
        <StyledText bg primary bold mx>
          {title}
        </StyledText>
      </View>
      <View style={styles.rightComponent}>{right ? right : null}</View>
    </View>
  )
}

export default Header
