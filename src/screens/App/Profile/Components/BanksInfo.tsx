import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Card, StyledText } from '../../../../components'
import { LstEmpleadosBanco } from '../../../../interfaces/employee'
import sizes from '../../../../constants/sizes'

interface Props {
  banks: LstEmpleadosBanco[]
}

interface Item {
  item: LstEmpleadosBanco
}

const BanksInfo = ({ banks }: Props) => {
  const styles = React.useMemo(() => createStyles(), [])

  const RenderItem = ({ item }: Item) => (
    <Card>
      <View style={styles.container}>
        <StyledText rg bold>
          {item.Banco_Numero}
        </StyledText>
        <StyledText sm>{item.Banco_CBU}</StyledText>
        <StyledText sm>{item.Alias1}</StyledText>
        <View style={styles.spacer} />
        <StyledText sm>{`${moment(item.FechaDesde).format('MM/YYYY')} - ${moment(item.FechaHasta).format('MM/YYYY')}`}</StyledText>
      </View>
    </Card>
  )

  return (
    <>
      <StyledText md bold my style={styles.title}>
        Bancos
      </StyledText>
      <FlatList
        data={banks}
        keyExtractor={(item) => `${item.IdBancos}`}
        renderItem={({ item }) => <RenderItem item={item} />}
        style={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </>
  )
}

const createStyles = () =>
  StyleSheet.create({
    listContainer: {
      paddingHorizontal: sizes.padding * 1.5,
      paddingTop: sizes.padding * 0.5,
      paddingBottom: sizes.padding
    },
    container: {
      paddingHorizontal: sizes.padding * 1.5,
      paddingVertical: sizes.padding
    },
    spacer: {
      marginVertical: sizes.padding * 2
    },
    title: {
      marginLeft: sizes.padding * 2
    }
  })

export default BanksInfo
