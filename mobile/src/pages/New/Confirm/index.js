import React, {useMemo} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';
import {Container, Avatar, Name, Time, SubmitButton} from './styles';

export default function Confirm({navigation, route}) {
  const {provider, hour} = route.params;
  const dateFormatted = useMemo(
    () => formatRelative(parseISO(hour), new Date(), {locale: pt}),
    [hour],
  );

  async function handleConfirm() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: hour,
    });
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleConfirm}>
          Confirmar Agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
