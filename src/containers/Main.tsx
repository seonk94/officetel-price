import React, { useState } from 'react';
import NameField from '../components/NameField';
import styled from 'styled-components';

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;

`
function Main() {

    const [name, setName] = useState('');

    return (
        <MainSection>
            <NameField 
                name={name}
                onChange={setName}/>
        </MainSection>
    )
}
export default Main;