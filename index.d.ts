export interface Color {
  (text: string): string;


  black_bbt: Color;
  red_bbt: Color;
  green_bbt: Color;
  yellow_bbt: Color;
  blue_bbt: Color;
  magenta_bbt: Color;
  cyan_bbt: Color;
  white_bbt: Color;

  black_bt: Color;
  red_bt: Color;
  green_bt: Color;
  yellow_bt: Color;
  blue_bt: Color;
  magenta_bt: Color;
  cyan_bt: Color;
  white_bt: Color;

  black_b: Color;
  red_b: Color;
  green_b: Color;
  yellow_b: Color;
  blue_b: Color;
  magenta_b: Color;
  cyan_b: Color;
  white_b: Color;

  black: Color;
  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  magenta: Color;
  cyan: Color;
  white: Color;

  bold: Color;
  faint: Color;
  italic: Color;
  underline: Color;
  blink: Color;
  overline: Color;
  inverse: Color;
  conceal: Color;
  strike: Color;
}

export const black_bbt: Color;
export const red_bbt: Color;
export const green_bbt: Color;
export const yellow_bbt: Color;
export const blue_bbt: Color;
export const magenta_bbt: Color;
export const cyan_bbt: Color;
export const white_bbt: Color;

export const black_bt: Color;
export const red_bt: Color;
export const green_bt: Color;
export const yellow_bt: Color;
export const blue_bt: Color;
export const magenta_bt: Color;
export const cyan_bt: Color;
export const white_bt: Color;

export const black_b: Color;
export const red_b: Color;
export const green_b: Color;
export const yellow_b: Color;
export const blue_b: Color;
export const magenta_b: Color;
export const cyan_b: Color;
export const white_b: Color;

export const black: Color;
export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const magenta: Color;
export const cyan: Color;
export const white: Color;

export const bold: Color;
export const faint: Color;
export const italic: Color;
export const underline: Color;
export const blink: Color;
export const overline: Color;
export const inverse: Color;
export const conceal: Color;
export const strike: Color;


declare global {
  interface String {

    black_bbt: string;
    red_bbt: string;
    green_bbt: string;
    yellow_bbt: string;
    blue_bbt: string;
    magenta_bbt: string;
    cyan_bbt: string;
    white_bbt: string;

    black_bt: string;
    red_bt: string;
    green_bt: string;
    yellow_bt: string;
    blue_bt: string;
    magenta_bt: string;
    cyan_bt: string;
    white_bt: string;

    black_b: string;
    red_b: string;
    green_b: string;
    yellow_b: string;
    blue_b: string;
    magenta_b: string;
    cyan_b: string;
    white_b: string;

    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;

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
