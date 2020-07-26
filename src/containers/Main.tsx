import React, { useState } from 'react';
import NameField from '../components/NameField';
import styled from 'styled-components';
import { agify, genderize, nationalize } from '../api';
import { IAgify, IGenderize, INationalize } from '../types/api';

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;

`
function Main() {

    const [name, setName] = useState('');
    const [age, setAge] = useState<IAgify>();
    const [gender, setGender] = useState<IGenderize>();
    const [nation, setNation] = useState<INationalize>();

    const getNameInfo = async() => {
        const [age, gender, nation] = await Promise.all([
            agify(name),
            genderize(name),
            nationalize(name),
        ]);

        if (age) setAge(age);
        if (gender) setGender(gender);
        if (nation) setNation(nation);
    }
    return (
        <MainSection>
            <NameField 
                name={name}
                setName={setName}
                searchName={getNameInfo}/>
            <h3>{age ? age.age : ''}</h3>
            <h3>{gender ? gender.gender : ''}</h3>
            <h3>{nation ? nation.country.map(c => c.country_id).join(',') : ''}</h3>
        </MainSection>
    )
}
export default Main;