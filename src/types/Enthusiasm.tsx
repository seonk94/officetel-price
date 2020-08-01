export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export type LoadingStatus = 'searching' | 'waiting' | 'searched'
