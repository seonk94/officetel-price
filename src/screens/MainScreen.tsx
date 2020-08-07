import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { agify, genderize, nationalize } from '@/src/api';
import { IAgify, IGenderize, INationalize } from '@/src/types/api';
import ResultForm from '@/src/components/ResultForm';
import { LoadingStatus } from '@/src/types';
import Footer from '@/src/components/Footer';
import InputNameTemplate from '@/src/template/InputNameTemplate';

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 48px;
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
      <InputNameTemplate
        setName={setName}
        searchName={getNameInfo} />
      <ResultForm
        name={name}
        age={age}
        gender={gender}
        nation={nation}
        loadingStatus={loadingStatus}
      />
      <Footer />
    </MainSection>
  )
}
export default Main;
