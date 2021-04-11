// TODO: Change implementation colors in buttons by BaseColors
export const BTN_COLORS:Map<string,string> =
new Map<string,string>([
  ['primary','odprz-btn-primary'],
  ['secundary','odprz-btn-secundary'],
  ['alert','odprz-btn-alert'],
  ['warn','odprz-btn-warn']
]);

export const BASE_COLORS: Map<string,string> =
new Map<string,string>([
  ['primary','odprz-primary'],
  ['secundary','odprz-secundary'],
  ['alert','odprz-alert'],
  ['warn','odprz-warn'],
]);

export enum btnClasses{
  btnDefault = 'odprz-btn-default',
  btnBorder = 'odprz-btn-border',
  btnFlat = 'odprz-btn-flat',
  btnText = 'odprz-btn-text',
  circleVariant ='btn-oval', // TODO: change css to btn-circle

}

export enum htmlSelectors{
  a = 'A',
  div = 'DIV',
  button = 'BUTTON',
  input = 'INPUT'
}
