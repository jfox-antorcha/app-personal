import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StyledText} from '../../../components';
import createStyles from './styles';

const Salaries = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <StyledText lg primary bold>
        Recibos de Sueldo
      </StyledText>
    </View>
  );
};

export default Salaries;
