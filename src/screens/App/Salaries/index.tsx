import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Card, Header, StyledIcon, StyledText } from '../../../components'
import createStyles from './styles'
import { Colors } from '../../../interfaces/colors'
import { RootState } from '../../../store'
import { LstRecibo } from '../../../interfaces/employee'
import moment from 'moment'
import icons from '../../../constants/icons'
import sizes from '../../../constants/sizes'

interface SalaryRecord {
  item: LstRecibo
}

interface Item {
  title: string
  value: string | number
  width?: string | number
}

const Salaries = () => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors), [colors])
  const salariesFiles = useSelector((state: RootState) => state.profile.data.LstRecibos)

  const RenderItem = ({ item }: SalaryRecord) => {
    const Item = ({ title, value, width }: Item) => (
      <View style={{ ...styles.itemContainer, width }}>
        <StyledText sm primary center my textProps={{ numberOfLines: 2 }}>
          {title}
        </StyledText>
        <StyledText sm center>
          {value}
        </StyledText>
      </View>
    )

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={styles.cardContainer}>
        <Card>
          <View style={styles.rowContainer}>
            <StyledText rg bold style={styles.cardTitle}>
              {moment(item.Fecha).format('MMMM, YYYY')}
            </StyledText>
            <StyledText rg style={styles.cardTitle}>
              {item.NetoPagar}
            </StyledText>
            <StyledIcon source={icons.attach} size={24} />
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Header title='Recibos de Sueldo' />
      <View style={styles.body}>
        <FlatList
          data={salariesFiles}
          keyExtractor={(item) => `${item.idRecibos_Periodo}`}
          renderItem={({ item }) => <RenderItem item={item} />}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  )
}

export default Salaries
