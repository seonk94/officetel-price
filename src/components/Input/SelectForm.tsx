import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './SelectForm.scss'

interface Props {
  value: string | number;
  selectLabel: string;
  items: { key: string, value: string | number }[];
  handleSelectChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
}
function SelectForm({ value, items, handleSelectChange, selectLabel }: Props) {

  return (
    <FormControl variant="outlined" className="select-form">
      <InputLabel className="select-form-label">{selectLabel}</InputLabel>
      <Select
        value={value}
        onChange={handleSelectChange}
      >
        {items.map((item) => (
          <MenuItem value={item.value}>{item.key}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectForm;
