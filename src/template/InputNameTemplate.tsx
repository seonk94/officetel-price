import React from 'react';
import PageTitle from '../components/PageTitle';
import NameField from '../components/NameField';
import NameInputField from '../components/NameInputField';

interface InputNameTemplateProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  searchName: () => Promise<void>;
}

function InputNameTemplate({ setName, searchName }: InputNameTemplateProps) {

  return (
    <div>
      <PageTitle />
      <NameField setName={setName} searchName={searchName} />
      {/* <NameInputField setName={setName} searchName={searchName} /> */}
    </div>
  )
}
export default InputNameTemplate;
