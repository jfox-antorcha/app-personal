import { useTheme } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, StyledIcon, StyledText } from '../../../../components'
import sizes from '../../../../constants/sizes'
import icons from '../../../../constants/icons'
import { Colors } from '../../../../interfaces/colors'
import { Notifications } from '../../../../interfaces/notifications'

interface Props {
  data: Notifications
}

const ItemCard = ({ data }: Props) => {
  const { colors } = useTheme()
  const styles = React.useMemo(() => createStyles(colors as Colors, data.importancia, data.leido), [colors, data.importancia, data.leido])

  return (
    <View style={styles.container}>
      <Card background={data.leido ? colors.lightGray : data.importancia == 0 ? colors.lightAlert : colors.card}>
        <View style={styles.cardContiner}>
          <View style={styles.rowContainer}>
            <StyledText rg bold style={styles.title}>
              {data.title}
            </StyledText>
            {data.importancia == 0 && <StyledIcon source={icons.warning} size={20} style={styles.icon} />}
          </View>
          <StyledText sm bold dimmed>
            {data.epigrafe}
          </StyledText>
          <StyledText sm dimmed style={styles.message}>
            {data.mensaje}
          </StyledText>
          <View style={styles.separator} />
          <View style={styles.rowContainer}>
            <StyledText xs light dimmed>
              {moment(data.fecha).format('DD/MM/YY HH:mm')}
            </StyledText>
            <View style={styles.rowContainer}>
              <StyledIcon source={data.leido ? icons.done : icons.check} size={16} style={styles.markAsReadIcon} />
              <StyledText xs style={styles.markAsRead}>
                {data.leido ? 'listo' : 'marcar como leido'}
              </StyledText>
            </View>
          </View>
        </View>
      </Card>
    </View>
  )
}

const createStyles = (colors: Colors, type: number, markAsRead: boolean) =>
  StyleSheet.create({
    container: {
      marginVertical: sizes.padding,
      marginHorizontal: sizes.padding * 0.5
    },
    cardContiner: {
      paddingHorizontal: sizes.padding,
      paddingVertical: sizes.padding
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    separator: {
      height: sizes.padding * 2
    },
    title: {
      color: type == 0 ? colors.alert : colors.text
    },
    message: {
      paddingTop: sizes.padding * 0.5
    },
    icon: {
      tintColor: colors.alert,
      marginRight: sizes.padding * 0.3
    },
    markAsRead: {
      color: markAsRead ? colors.success : colors.primary
    },
    markAsReadIcon: {
      tintColor: markAsRead ? colors.success : colors.primary
    }
  })

export default ItemCard
