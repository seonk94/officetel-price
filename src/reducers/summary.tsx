
import { SummaryAction } from '../actions/summary';
import { SummaryState } from '../types/summary';
import { GET_SUMMARY } from '../constants/summary';

const initialState : SummaryState = {
    monthlyRentCount : 0,
    longRentCount : 0,
    expensiveMonthlyRendTransaction : {
      area: 63.81,
      area_code: '11100',
      building_year: 2005,
      day: 30,
      deposit: '18,000',
      dong: '홍지동',
      floor: 4,
      gu: '종로구',
      housing_complex: '세검정아트오피스텔',
      month: 12,
      monthly_rent: 0,
      year: 2015,
      zip_string: '104-21',
  }
} 

export function summary(state: SummaryState = initialState, action: SummaryAction): SummaryState {
  switch (action.type) {
    case GET_SUMMARY:
      return initialState;
    default:
      return state;
  }
}
