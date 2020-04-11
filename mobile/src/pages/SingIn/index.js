import React from 'react';
import {Text} from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function SingIn() {
  return (
    <Background>
      <Text>SingIn</Text>
      <Input icon="call" placeholder="Digite seu nome" />
      <Button>Acessar</Button>
    </Background>
  );
}
