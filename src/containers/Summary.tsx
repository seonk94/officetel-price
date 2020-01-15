import SummaryScreen from '../Screens/SummaryScreen';
import * as actions from '../actions/summary';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { StoreState } from '../reducers';

export function mapStateToProps({ summary }: StoreState) {
  return {
    longRentCount : summary.longRentCount,
    monthlyRentCount: summary.monthlyRentCount,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.GetSummary>) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);
