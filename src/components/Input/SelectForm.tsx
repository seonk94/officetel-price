import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './SelectForm.scss'

interface Props {
  value: string | number;
  selectLabel: string;
  items: { text: string, value: string | number }[];
  handleSelectChange: React.Dispatch<React.SetStateAction<any>>;
}
function SelectForm({ value, items, handleSelectChange, selectLabel }: Props) {

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    handleSelectChange(event.target.value as string | number)
  };

  return (
    <FormControl variant="outlined" className="select-form">
      <InputLabel className="select-form-label">{selectLabel}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem value={item.value}>{item.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectForm;
