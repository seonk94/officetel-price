import { enthusiasm } from "./Enthusiasm";
import { summary } from "./summary";
import { combineReducers } from 'redux';
import { EnthusiasmState } from "../types/Enthusiasm";
import { SummaryState } from "../types/summary";

export interface StoreState {
  enthusiasm: EnthusiasmState,
  summary: SummaryState,
}

export default combineReducers<StoreState>({
  enthusiasm: enthusiasm,
  summary: summary
})

//https://deminoth.github.io/redux/basics/Reducers.html