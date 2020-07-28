import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from './Input';
import CustomButton from './CustomButton';
import { signInWithGoogle } from '../firebase';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    borderRadius: '5px',
    padding: '2rem',
    border: '1px solid #ccc',
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 3px 15px rgba(0,0,0,.6)',

    '& > *': {
      margin: theme.spacing(1),
    },
  },

  title: {
    textAlign: 'center',
    marginBottom: '40px',
  },
}));

const SignInForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    setUser({
      email: '',
      password: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.title}>
        <Typography variant="h3" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="h6" gutterBottom>
          Use your Whispy Account
        </Typography>
      </div>
      <Input
        name="email"
        type="email"
        value={email}
        handleChange={handleChange}
        placeholder="Enter email..."
        variant="outlined"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        value={password}
        handleChange={handleChange}
        placeholder="Enter password..."
        variant="outlined"
        label="Password"
      />
      <CustomButton
        style={{ fontSize: '1.6rem' }}
        size="large"
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign In
      </CustomButton>
      <CustomButton
        style={{ fontSize: '1.6rem' }}
        size="large"
        type="button"
        variant="outlined"
        color="secondary"
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </CustomButton>
    </form>
  );
};

export default SignInForm;
