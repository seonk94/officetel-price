import React from 'react';
import { IAgify, IGenderize, INationalize } from '@/src/types/api';
import { LoadingStatus } from '@/src/types';
import styled, { ThemeProvider } from 'styled-components';
import NotFoundImage from '@/src/components/NotFoundImage';
import AlphaGoImage from '../AlphaGoImage';
import { ThemeDispatch } from '@/src/App';
import ResultTextList from '../ResultTextList';

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

function ResultForm({ name, age, gender, nation, loadingStatus }: ResultFormProps) {

  const validAge = age && age.age;
  const validGender = gender && gender.gender;
  const validNation = nation && nation.country.length > 0;
  const validData = validAge && validGender && validNation;


  return (
    <ThemeDispatch.Consumer>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <FormContainer>
            {loadingStatus === 'searching' && <AlphaGoImage />}
            {
              loadingStatus === 'searched'
                ? validData
                  ? <ResultTextList age={age} nation={nation} gender={gender} />
                  : <NotFoundImage name={name} />
                : undefined
            }
          </FormContainer>
        </ThemeProvider>
      )}
    </ThemeDispatch.Consumer>
  )
}

export default ResultForm;
