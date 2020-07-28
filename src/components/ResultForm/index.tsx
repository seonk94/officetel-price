import React, { Fragment } from 'react';
import { IAgify, IGenderize, INationalize } from '../../types/api';
import { LoadingStatus } from '../../types';
import Loader from '../Loader';
import styled from 'styled-components';
import { BounseLeftReturn, BounceRightReturn, BounseBottomReturn } from '../../style/easing';

interface ResultFormProps {
  age?: IAgify;
  gender?: IGenderize;
  nation?: INationalize;
  loadingStatus: LoadingStatus;
}

const FormContainer = styled.div`
  margin: 0 auto;
`
const FormRow = styled.div`
  display: flex;
`
const AgeRow = styled(FormRow)`
  animation: ${BounseLeftReturn} 1s ease alternate 1;
`
const GenderRow = styled(FormRow)`
  animation: ${BounceRightReturn} 1s ease alternate 1;
`

const CountryRow = styled(FormRow)`
  animation: ${BounseBottomReturn} 1s ease alternate 1;
`
function ResultForm({ age, gender, nation, loadingStatus }: ResultFormProps) {

  return (
    <FormContainer>
      {loadingStatus === 'searching' ? <Loader /> : undefined}
      {
        loadingStatus === 'searched'
          ? <Fragment>
            <AgeRow>
              <h3>나이 : </h3>
              <h3>{age ? age.age : ''}</h3>
            </AgeRow>
            <GenderRow>
              <h3>성별 : </h3>
              <h3>{gender ? gender.gender : ''}</h3>
            </GenderRow>
            <CountryRow>
              <h3>국가 : </h3>
              <h3>{nation ? nation.country.map(c => c.country_id).join(' or ') : ''}</h3>
            </CountryRow>
          </Fragment>
          : undefined
      }
    </FormContainer>
  )
}

export default ResultForm;
