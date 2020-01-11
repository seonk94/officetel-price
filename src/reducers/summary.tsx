
import { SummaryAction } from '../actions/summary';
import { SummaryState } from '../types/summary';
import { GET_SUMMARY } from '../constants/summary';

const initialState : SummaryState = {
    monthlyRentCount : 0,
    longRentCount : 0,
} 

export function summary(state: SummaryState = initialState, action: SummaryAction): SummaryState {
  switch (action.type) {
    case GET_SUMMARY:
      return initialState;
    default:
      return state;
  }
}
