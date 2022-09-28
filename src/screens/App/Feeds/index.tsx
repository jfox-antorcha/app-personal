import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Header, StyledText } from '../../../components'
import createStyles from './styles'
import { Colors } from '../../../interfaces/colors'
import { FlatList } from 'react-native-gesture-handler'
import { notificaciones } from '../../../mockData/notificaciones'
import ItemCard from './components/ItemCard'

const Feeds = () => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])
  return (
    <View style={styles.container}>
      <Header title='Notificaciones' />
      <FlatList
        data={notificaciones}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ItemCard data={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  )
}

export default Feeds
