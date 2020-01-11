
import { EnthusiasmAction } from '../actions/Enthusiasm';
import { EnthusiasmState } from '../types/Enthusiasm';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/Enthusiasm';

const initialState : EnthusiasmState = {
    languageName : 'TypeScript',
    enthusiasmLevel : 1,
} 

export function enthusiasm(state: EnthusiasmState = initialState, action: EnthusiasmAction): EnthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...initialState, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...initialState, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}



// 하지 말것
// 인수들을 변경(mutate)하기;
// API 호출이나 라우팅 전환같은 사이드이펙트를 일으키기;
// Date.now()나 Math.random() 같이 순수하지 않은 함수를 호출하기.