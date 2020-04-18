import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import {Container} from './styles';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione uma Data/Horário',
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
