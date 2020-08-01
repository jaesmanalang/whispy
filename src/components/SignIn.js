import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { FirebaseContext } from '../firebase';
import { HOME, SIGN_UP, PASSWORD_FORGET } from '../constants/routes';

const useStyles = makeStyles(theme => ({
  alert: {
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn({ history }) {
  const classes = useStyles();
  const { firebase } = useContext(FirebaseContext);
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const onSubmit = async (data, e) => {
    const { email, password } = data;
    try {
      await firebase.signInWithEmailAndPassword(email, password);
      history.push(HOME);
    } catch (err) {
      setError('auth', {
        message: err.message,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {errors.auth && (
        <Alert className={classes.alert} severity="error">
          {errors.auth.message}
        </Alert>
      )}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in with your Whispy account
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => {
            clearErrors('auth');
            handleSubmit(onSubmit)(e);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: 'Please enter your email address.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: 'Please enter your password.' })}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ''}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                inputRef={register}
                defaultValue={false}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={PASSWORD_FORGET}>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to={SIGN_UP}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* {errors && <p>{errors.message}</p>} */}
    </Container>
  );
}

export default withRouter(SignIn);
