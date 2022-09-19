export default (
  variants: string[],
  props: any,
  styles: any,
  stylePrefix = '',
) => {
  return variants
    .map(variant =>
      props[variant] ? styles[`${variant}${stylePrefix}`] : null,
    )
    .filter(style => style !== null);
};
