export type LoadingStatus = 'searching' | 'waiting' | 'searched';

export type ThemeMode = 'dark' | 'light'

export interface CustomTheme {
  colors: {
    mainTextColor: string;
    subTextColor: string;
    mainBgColor: string;
    subBgColor: string;
  }
}
