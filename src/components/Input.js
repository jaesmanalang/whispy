import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormInput = props => {
  const {
    name,
    type,
    value,
    handleChange,
    placeholder,
    variant,
    label,
  } = props;

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      InputProps={{
        style: {
          fontSize: '1.4rem',
        },
      }}
      InputLabelProps={{
        style: {
          fontSize: '1.4rem',
        },
      }}
    />
  );
};

export default FormInput;
