import React, { useState, useEffect } from 'react';
import NameField from '../components/NameField';
import styled from 'styled-components';
import { agify, genderize, nationalize } from '../api';
import { IAgify, IGenderize, INationalize } from '../types/api';
import Loader from '../components/Loader';
import ResultForm from '../components/ResultForm';
import { LoadingStatus } from '../types';

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 40% 60%;
`
function Main() {

  const [name, setName] = useState('');
  const [age, setAge] = useState<IAgify>();
  const [gender, setGender] = useState<IGenderize>();
  const [nation, setNation] = useState<INationalize>();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('waiting');

  useEffect(() => {
    setLoadingStatus('waiting')
  }, [name])

  const getNameInfo = async () => {
    setLoadingStatus('searching')
    const [age, gender, nation] = await Promise.all([
      agify(name),
      genderize(name),
      nationalize(name),
    ]);

    if (age) setAge(age);
    if (gender) setGender(gender);
    if (nation) setNation(nation);
    setLoadingStatus('searched')
  }
  return (
    <MainSection>
      <NameField
        name={name}
        setName={setName}
        searchName={getNameInfo} />
      <ResultForm
        age={age}
        gender={gender}
        nation={nation}
        loadingStatus={loadingStatus}
      />
    </MainSection>
  )
}
export default Main;
