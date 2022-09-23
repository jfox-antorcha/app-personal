import React from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, Platform } from 'react-native'
import { StyledButton, StyledInput, StyledText } from '../../components'
import { useTheme } from '@react-navigation/native'
import { getUserData } from '../../store/auth/actions'
import { RootState, useAppDispatch } from '../../store'
import createStyles from './styles'
import { useSelector } from 'react-redux'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

type Actions = {
  type: 'FORM_INPUT_UPDATE'
  input: string
  value: string
  isValid: boolean
}

const INITIAL_STATE = {
  inputValues: {
    user: '',
    password: ''
  },
  inputValidities: {
    user: false,
    password: false
  },
  formIsValid: false
}

const formReducer = (state: any, action: Actions) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    }

    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    }

    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }

    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    }
  }
  return state
}

const Auth = () => {
  const { colors } = useTheme()
  const dispatch = useAppDispatch()
  const user = useSelector((state: RootState) => state.user)
  const [formState, formDispatch] = React.useReducer(formReducer, INITIAL_STATE)
  const styles = React.useMemo(() => createStyles(colors, formState), [colors, formState])

  const handleInputChange = React.useCallback(
    (inputId: any, inputValue: any, inputValidity: any) => {
      formDispatch({
        type: 'FORM_INPUT_UPDATE',
        input: inputId,
        value: inputValue,
        isValid: inputValidity
      })
    },
    [formDispatch]
  )

  const handleAuth = async () => {
    try {
      await dispatch(
        getUserData({
          user: formState.inputValues.user,
          password: formState.inputValues.password
        })
      )
      if (user.error) throw new Error('Error al iniciar sesión')

      // const response = await getTokenAccesso(
      //   formState.inputValues.user,
      //   formState.inputValues.password,
      // );
      // console.log('Respuesta: ', response);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StyledText xl black>
            Hola!
          </StyledText>
          <StyledText rg dimmed>
            Por favor ingrese sus credenciales
          </StyledText>
        </View>
        <View style={styles.body}>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'position'} keyboardVerticalOffset={30}>
            <StyledText my mx black>
              Usuario
            </StyledText>
            <StyledInput autoCapitalize='none' id='user' onInputChange={handleInputChange} mode='outline' error='requerido y/o no válido' />
            <StyledText my mx black>
              Contraseña
            </StyledText>
            <StyledInput
              autoCapitalize='none'
              id='password'
              password
              minLength={1}
              onInputChange={handleInputChange}
              mode='outline'
              error='Debe tener por lo menos 6 caracteres'
            />
          </KeyboardAvoidingView>
          <StyledButton my sz60 primary disabled={!formState.formIsValid} onPress={handleAuth} style={styles.button} loading={user.loading}>
            <StyledText bold surface>
              Iniciar sesión
            </StyledText>
          </StyledButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Auth
