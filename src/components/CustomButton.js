import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default CustomButton;
