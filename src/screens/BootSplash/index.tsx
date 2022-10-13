import React from 'react'
import { View, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useAppDispatch } from '../../store'
import { getUserData } from '../../store/auth/actions'
import { Colors } from '../../interfaces/colors'
import colors from '../../constants/colors'
import { StyledText } from '../../components'

interface Props {
  setUserStatus: (value: boolean) => void
}

const BootSplash = ({ setUserStatus }: Props) => {
  const dispatch = useAppDispatch()
  const styles = React.useMemo(() => createStyles(colors.dark as Colors), [colors])

  React.useEffect(() => {
    ;(async () => {
      try {
        const getStoragedUser = await AsyncStorage.getItem('@user')
        if (getStoragedUser) {
          const user = JSON.parse(getStoragedUser)
          if (user.password) {
            await dispatch(
              getUserData({
                user: user.user,
                password: user.password
              })
            )
          }
          setUserStatus(true)
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <View style={styles.container}>
      <>
        <StyledText xl bold primary>
          App Personal
        </StyledText>
      </>
    </View>
  )
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.lightPrimary
    }
  })

export default BootSplash
