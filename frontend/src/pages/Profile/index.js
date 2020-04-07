import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);
  function handleSumit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSumit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassaword"
          type="password"
          placeholder="Confirmacação de nova senha"
        />
        <button type="submit">
          {loading ? 'Aguarde...' : 'Atualizar perfil'}
        </button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
