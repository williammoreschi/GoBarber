import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {singUpRequest} from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SingUp({navigation}) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(singUpRequest());
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('SingIn')}>
          <SingLinkText>Já possuo uma conta </SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}

SingUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
