import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StyledText} from '../../../components';
import createStyles from './styles';

const Profile = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <StyledText lg primary bold>
        Perfil de usuario
      </StyledText>
    </View>
  );
};

export default Profile;
