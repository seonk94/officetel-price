import React, { Fragment } from 'react';
import { IAgify, IGenderize, INationalize } from '@/src/types/api';
import { LoadingStatus } from '@/src/types';
import styled from 'styled-components';
import { BounseLeftReturn, BounceRightReturn, BounseBottomReturn } from '@/src/style/animation';
import BookLoader from '@/src/components/BookLoader';
import NotFoundImage from '@/src/components/NotFoundImage';
interface ResultFormProps {
  age?: IAgify;
  gender?: IGenderize;
  nation?: INationalize;
  loadingStatus: LoadingStatus;
  name: string;
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
function ResultForm({ name, age, gender, nation, loadingStatus }: ResultFormProps) {

  const validAge = age && age.age;
  const validGender = gender && gender.gender;
  const validNation = nation && nation.country.length > 0;
  const validData = validAge && validGender && validNation
  return (
    <FormContainer>
      {loadingStatus === 'searching' ? <BookLoader /> : undefined}
      {
        loadingStatus === 'searched'
          ? validData
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
            : <NotFoundImage name={name} />
          : undefined
      }
    </FormContainer>
  )
}

export default ResultForm;
