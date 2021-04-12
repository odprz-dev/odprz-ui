import { BTN_COLORS } from "./css-const"

/**
  * Validate if the @Input color is defined.
  *
  * When the color has been defined, it compares the values in the colormap definition.
  *
  * Retrieves the corresponding CSS class for that color.
  *
  *
*/
export function validateBtnColor(color:string | undefined):string | undefined{
  return (color)? BTN_COLORS.get(color) : undefined
}
