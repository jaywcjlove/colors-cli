export interface Color {
  (text: string): string;

  bold_bbt: Color;
  faint_bbt: Color;
  italic_bbt: Color;
  underline_bbt: Color;
  blink_bbt: Color;
  overline_bbt: Color;
  inverse_bbt: Color;
  conceal_bbt: Color;
  strike_bbt: Color;

  bold_bt: Color;
  faint_bt: Color;
  italic_bt: Color;
  underline_bt: Color;
  blink_bt: Color;
  overline_bt: Color;
  inverse_bt: Color;
  conceal_bt: Color;
  strike_bt: Color;

  bold_b: string;
  faint_b: string;
  italic_b: string;
  underline_b: string;
  blink_b: string;
  overline_b: string;
  inverse_b: string;
  conceal_b: string;
  strike_b: string;

  black: Color;
  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  magenta: Color;
  cyan: Color;
  white: Color;
}

export const bold_bbt: Color;
export const faint_bbt: Color;
export const italic_bbt: Color;
export const underline_bbt: Color;
export const blink_bbt: Color;
export const overline_bbt: Color;
export const inverse_bbt: Color;
export const conceal_bbt: Color;
export const strike_bbt: Color;

export const bold_bt: Color;
export const faint_bt: Color;
export const italic_bt: Color;
export const underline_bt: Color;
export const blink_bt: Color;
export const overline_bt: Color;
export const inverse_bt: Color;
export const conceal_bt: Color;
export const strike_bt: Color;

export const bold_b: Color;
export const faint_b: Color;
export const italic_b: Color;
export const underline_b: Color;
export const blink_b: Color;
export const overline_b: Color;
export const inverse_b: Color;
export const conceal_b: Color;
export const strike_b: Color;

export const black: Color;
export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const magenta: Color;
export const cyan: Color;
export const white: Color;

declare global {
  interface String {

    bold_bbt: string;
    faint_bbt: string;
    italic_bbt: string;
    underline_bbt: string;
    blink_bbt: string;
    overline_bbt: string;
    inverse_bbt: string;
    conceal_bbt: string;
    strike_bbt: string;

    bold_bt: string;
    faint_bt: string;
    italic_bt: string;
    underline_bt: string;
    blink_bt: string;
    overline_bt: string;
    inverse_bt: string;
    conceal_bt: string;
    strike_bt: string;

    bold_b: string;
    faint_b: string;
    italic_b: string;
    underline_b: string;
    blink_b: string;
    overline_b: string;
    inverse_b: string;
    conceal_b: string;
    strike_b: string;

    // @ts-ignore
    bold: string;
    faint: string;
    italic: string;
    underline: string;
    // @ts-ignore
    blink: string;
    overline: string;
    inverse: string;
    conceal: string;
    // @ts-ignore
    strike: string;
  }
}
