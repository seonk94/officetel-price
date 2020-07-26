import * as React from 'react';
import styled from 'styled-components';

interface NameFieldProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    searchName: () => Promise<void>;
}

const NameBox = styled.div`
    display: flex;
    padding: 0 10px;
    margin-top: 25vh;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    
    border: 1px solid black;
    border-radius: 4px;
    width: 30%;
    height: fit-content;

    input {
        width: 100%;
        height: 36px;
        font-size: 20px;
        border: none;

        &:focus {
            outline: none;
        }
    }

    i {
        font-size: 26px;

        &:hover {
            cursor : pointer;
            color: #ddd;
        }
    }
`

function NameField({ name, setName, searchName }: NameFieldProps) {
    const handleKeyPress = (e : React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            searchName()
        }
    }
    return (
        <NameBox>
            <input 
                onChange={({ target: { value } }) => setName(value)}
                onKeyPress={handleKeyPress}
                />
            <i className="fas fa-search" onClick={searchName}></i>
        </NameBox>
    )
}

export default NameField;