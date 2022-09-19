import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StyledText} from '../../../components';
import createStyles from './styles';

const Feeds = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <StyledText lg primary bold>
        Notificaciones
      </StyledText>
    </View>
  );
};

export default Feeds;
