import React from 'react'
import { View, TextInput, Image, StyleSheet, TextInputProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledText from '../Text'
import icons from '../../constants/icons'
import sizes from '../../constants/sizes'
import { useTheme } from '@react-navigation/native'
import { Colors } from '../../interfaces/colors'
import fonts from '../../constants/fonts'

interface Props {
  autoCapitalize?: 'characters' | 'none' | 'sentences' | 'words'
  id: string
  email?: boolean
  error?: string
  minLength?: number
  mode?: 'outline' | 'underline'
  password?: boolean
  placeholder?: string
  required?: boolean
  onInputChange: (id: string, value: string, isValid: boolean) => void
}

interface State {
  value: string
  isValid: boolean
  touched: boolean
}

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const INITIAL_STATE = {
  value: '',
  isValid: false,
  touched: false
}

type Actions = { type: 'INPUT_CHANGE'; value: any; isValid: boolean } | { type: 'INPUT_BLUR' }

const inputReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      }

    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      }

    default:
      return { ...state }
  }
}

const StyledInput = ({ autoCapitalize, id, email, error, minLength, mode, password, placeholder, required, onInputChange }: Props) => {
  const { colors } = useTheme()
  const [isVisible, setIsVisible] = React.useState(false)
  const [isFocus, setIsFocus] = React.useState(false)
  const [inputState, dispatch] = React.useReducer(inputReducer, INITIAL_STATE)
  const styles = React.useMemo(() => createStyles(colors, mode, inputState, isFocus), [colors, mode, inputState, isFocus])

  React.useEffect(() => {
    if (inputState.touched) onInputChange(id, inputState.value, inputState.isValid)
  }, [inputState, onInputChange, id])

  const handleChangeText = (text: string) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isValid = true
    if (required && text.trim().length === 0) isValid = false
    if (email && !emailRegex.test(text.toLowerCase())) isValid = false
    if (minLength && text.length < minLength) isValid = false

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid
    })
  }

  const handleBlur = () => {
    setIsFocus(false)
    dispatch({ type: INPUT_BLUR })
  }

  return (
    <View>
      <View style={[styles.inputContainer, styles.border]}>
        <TextInput
          autoCapitalize={autoCapitalize}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={password && !isVisible}
          onChangeText={handleChangeText}
          onBlur={handleBlur}
          onFocus={(e) => setIsFocus(true)}
        />
        {password && (
          <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer} onPress={() => setIsVisible(!isVisible)}>
            <Image source={isVisible ? icons.visibilityOff : icons.visibility} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <StyledText xs error right mx>
        {!inputState.isValid && inputState.touched ? error : null}
      </StyledText>
    </View>
  )
}

const createStyles = (colors: Colors, mode: string, inputState: State, isFocus: boolean) =>
  StyleSheet.create({
    border: mode
      ? mode === 'outline'
        ? {
            borderRadius: sizes.radius,
            borderWidth: 1,
            borderColor: !inputState.isValid && inputState.touched ? colors.alert : isFocus ? colors.primary : colors.border
          }
        : {
            borderBottomWidth: 1,
            borderColor: !inputState.isValid && inputState.touched ? colors.alert : colors.border
          }
      : {
          borderWidth: 0
        },
    inputContainer: {
      paddingHorizontal: sizes.padding,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: sizes.touchableHeight
    },
    input: {
      flex: 3,
      height: sizes.touchableHeight,
      fontSize: fonts.sizes.rg,
      ...fonts.regular
    },
    iconContainer: {
      flex: 1,
      width: 30,
      height: 30,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: colors.dimmedText
    }
  })

export default StyledInput
