import * as React from 'react';
import styled from 'styled-components';

interface NameFieldProps {
    name: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const NameBox = styled.div`
    display: flex;
    width: 30%;
    margin: auto;

    input {
        width: 100%;
        height: 36px;
    }
`

function NameField({ name, onChange }: NameFieldProps) {
    return (
        <NameBox>
            <input onChange={({ target: { value } }) => onChange(value)}/>
        </NameBox>
    )
}

export default NameField;