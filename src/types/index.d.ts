type LoadingStatus = 'searching' | 'waiting' | 'searched';

type ThemeMode = 'dark' | 'light'

interface CustomTheme {
  colors: {
    mainTextColor: string;
    subTextColor: string;
    mainBgColor: string;
    subBgColor: string;
  }
}

interface IAgify {
  name: string;
  age: number;
  count: number;
}

interface IGenderize {
  name: string;
  gender: 'male' | 'female';
  probability: number;
  count: number;
}

interface INationalize {
  name: string;
  country: {
      country_id: string;
      probability: number;
  }[];
}
