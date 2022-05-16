import {Text, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import appStyles from '../styles/app.styles';
import Button from '../components/Button';
import Input from '../components/Input';
import FormErrors from '../components/FormErrors';

const useLoginFormState = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  let usernameErrors = [];
  if (username !== 'user@example.com') {
    usernameErrors.push('Invalid username');
  }

  let passwordErrors = [];
  if (password !== 'password') {
    passwordErrors.push('Invalid password');
  }

  return {
    fields: {
      username: {
        value: username,
        set: setUsername,
        errors: submited ? usernameErrors : [],
      },
      password: {
        value: password,
        set: setPassword,
        errors: submited ? passwordErrors : [],
      },
    },
    inProgress: inProgress,
    submited: submited,
    submit: () => {
      setSubmited(true);
      if (!inProgress && !usernameErrors.length && !passwordErrors.length) {
        setInProgress(true);
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
        })
          .then(response => response.json())
          .then(() => {
            setInProgress(false);
            props.navigation.replace('Home');
          })
          .catch(error => {
            setInProgress(false);
          });
      }
    },
  };
};

const Login = props => {
  const {fields, inProgress, submit} = useLoginFormState(props);

  return (
    <SafeAreaView style={appStyles.root}>
      <View style={appStyles.floatContainer}>
        <Text style={appStyles.h1}>Login</Text>
        <Input
          testID="Login.usernameInput"
          label="Username"
          value={fields.username.value}
          onChangeText={fields.username.set}
          placeholder="user@example.com"
          error={fields.username.errors.length}
          disabled={inProgress}
        />
        <Input
          testID="Login.passwordInput"
          label="Password"
          value={fields.password.value}
          onChangeText={fields.password.set}
          placeholder="password"
          secureTextEntry
          error={fields.password.errors.length}
          disabled={inProgress}
        />
        <FormErrors
          errors={[...fields.username.errors, ...fields.password.errors]}
        />
        <Button
          disabled={inProgress}
          onPress={submit}
          testID="Login.submitButton">
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
