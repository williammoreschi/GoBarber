import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Background from '~/components/Background';
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  LogoutButton,
} from './styles';

import {updateProfileRequest} from '~/store/modules/user/actions';
import {singOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassaword, setConfirmPassaword] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPassawordRef = useRef();

  function handleLogout() {
    dispatch(singOut());
  }

  function handleSubmit() {
    const data = {name, email, oldPassword, password, confirmPassaword};
    dispatch(updateProfileRequest(data));
  }

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassaword('');
  }, [profile]);

  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPassawordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Repita sua nova senha"
            ref={confirmPassawordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
            value={confirmPassaword}
            onChangeText={setConfirmPassaword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Atualizar Perfil
          </SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBaber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
