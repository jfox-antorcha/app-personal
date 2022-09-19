import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StyledText} from '../../../components';
import createStyles from './styles';

const Messages = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <StyledText lg primary bold>
        Comunicaciones
      </StyledText>
    </View>
  );
};

export default Messages;
