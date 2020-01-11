
import * as constants from '../constants/summary';

export interface GetSummary {
    type: constants.GET_SUMMARY;
}


export type SummaryAction = GetSummary;

export function getSummary(): GetSummary {
    return {
        type: constants.GET_SUMMARY
    };
}
