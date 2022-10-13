import React from 'react'
import { View, Text } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { useTheme } from '@react-navigation/native'
import createStyles from './styles'
import { Colors } from '../../../interfaces/colors'
import { Header, StyledText } from '../../../components'
import sizes from '../../../constants/sizes'
import ItemCard from '../Feeds/components/ItemCard'
import { notificaciones } from '../../../mockData/notificaciones'

const Home = () => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])
  const notificationsToShow = notificaciones.filter((i) => i.importancia == 0 && i.leido == false)

  const Notifications = () => (
    <>
      <StyledText md mx my>
        Notificaciones importantes
      </StyledText>
      <Carousel
        loop
        width={sizes.width - sizes.padding * 2}
        // height={sizes.width / 2}
        autoPlay={true}
        data={notificationsToShow}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index, item }) => <ItemCard data={item} key={index} />}
      />
    </>
  )

  return (
    <View style={styles.container}>
      <Header title='App-Personal' />
      <View style={styles.body}>{notificationsToShow && <Notifications />}</View>
    </View>
  )
}

export default Home
