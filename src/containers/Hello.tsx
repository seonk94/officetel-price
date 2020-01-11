import Hello from '../components/Hello';
import * as actions from '../actions/Enthusiasm';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { StoreState } from '../reducers';

export function mapStateToProps({ enthusiasm }: StoreState) {
  return {
    enthusiasmLevel : enthusiasm.enthusiasmLevel,
    name: enthusiasm.languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
