import {ReactNode} from 'react';
import {TextProps, ViewStyle, TextStyle} from 'react-native';

export const VARIANTS = [
  //Font sizes
  'xl',
  'bg',
  'lg',
  'md',
  'rg',
  'sm',
  'xs',
  // Font weight
  'bold',
  'regular',
  'light',
  'medium',
  // Colors
  'primary',
  'accent',
  'surface',
  'dimmed',
  'success',
  'warn',
  'error',
  // Position
  'left',
  'right',
  'center',
  'mx',
  'my',
];

type Key = string | number;
export type GenericObjInterface<T> = {
  [key in Key]: T;
};

export type StringObj = GenericObjInterface<string>;
export type NumberObj = GenericObjInterface<number>;

interface Variants {
  xl?: boolean;
  bg?: boolean;
  lg?: boolean;
  md?: boolean;
  rg?: boolean;
  sm?: boolean;
  xs?: boolean;
  bold?: boolean;
  regular?: boolean;
  light?: boolean;
  medium?: boolean;
  primary?: boolean;
  accent?: boolean;
  surface?: boolean;
  dimmed?: boolean;
  success?: boolean;
  warn?: boolean;
  error?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  mx?: boolean;
  my?: boolean;
}

export interface CustomProps extends Variants {
  children: ReactNode;
  textProps?: TextProps;
  style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[];
}
