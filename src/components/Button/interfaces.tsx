import {ViewStyle, TouchableOpacityProps} from 'react-native';

export const VARIANTS = [
  'primary',
  'accent',
  'alert',
  'success',
  'warn',
  'outline',
  'borderless',
  'sz80',
  'sz60',
  'sz40',
  'sz30',
  'icon',
  'mx',
  'my',
];

interface ButtonVariants {
  outline?: boolean;
  borderless?: boolean;
  primary?: boolean;
  accent?: boolean;
  success?: boolean;
  alert?: boolean;
  warn?: boolean;
  sz80?: boolean;
  sz60?: boolean;
  sz40?: boolean;
  sz30?: boolean;
  icon?: boolean;
  mx?: boolean;
  my?: boolean;
}

export interface ButtonProps extends ButtonVariants {
  children: JSX.Element | JSX.Element[];
  onPress: TouchableOpacityProps['onPress'];
  style?: ViewStyle | ViewStyle[];
  touchProps?: TouchableOpacityProps;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
}
