export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  black: 'hsl(0deg 0% 0%)',
  text: 'hsl(0deg 0% 48%)',
  offWhite: 'hsl(206deg 50% 94%)',
  primary: 'hsl(37deg 86% 58%)',
  secondary: 'hsl(225deg 75% 39%)',
  tertiary: 'hsl(352deg 92% 67%)',
  dark: 'hsl(216deg 28% 7%)',
  offDark: 'hsl(215deg 21% 11%)'
}

export const WEIGHTS = {
  normal: 400,
  bold: 700
}

export const FAMILYS = {
  sansSerif: '"Quicksand", sans-serif',
  cursive: '"Lilita One", cursive'
}

export const LIGHT = {
  primaryColor: `${COLORS.offWhite}`,
  secondaryColor: `${COLORS.white}`,
  themeTextColor: `${COLORS.secondary}`,
  themeBorderColor: `${COLORS.offWhite}`,
}

export const DARK = {
  primaryColor: `${COLORS.dark}`,
  secondaryColor: `${COLORS.offDark}`,
  themeTextColor: `${COLORS.white}`,
  themeBorderColor: 'hsl(212deg 12% 21%)'
}

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};