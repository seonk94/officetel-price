import React from 'react';
import PageTitle from '../components/PageTitle';
import NameInputField from '../components/NameInputField';

interface InputNameTemplateProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  searchName: () => Promise<void>;
}

function InputNameTemplate({ setName, searchName }: InputNameTemplateProps) {

  return (
    <div>
      <PageTitle />
      <NameInputField setName={setName} searchName={searchName} />
    </div>
  )
}
export default InputNameTemplate;
