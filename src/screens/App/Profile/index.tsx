import React from 'react'
import { ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../store'
import { Header } from '../../../components'
import { Colors } from '../../../interfaces/colors'
import createStyles from './styles'
import GeneralInfo from './Components/GeneralInfo'
import BanksInfo from './Components/BanksInfo'
import AddressInfo from './Components/AddressInfo'
import EmailInfo from './Components/EmailInfo'
import Logout from './Components/Logout'

const Profile = () => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])
  const profile = useSelector((state: RootState) => state.profile)

  return (
    <View style={styles.container}>
      <Header title='Perfil del empleado' right={<Logout />} />
      {!profile.loading ? (
        <ScrollView style={styles.body} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <GeneralInfo profile={profile.data} />
          <BanksInfo banks={profile.data.LstEmpleadosBancos} />
          <AddressInfo address={profile.data.LstEmpleadosDomicilios} />
          <EmailInfo emails={profile.data.LstEmpleadosEmails} />
        </ScrollView>
      ) : null}
    </View>
  )
}

export default Profile
