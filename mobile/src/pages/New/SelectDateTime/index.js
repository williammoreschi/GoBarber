import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime({navigation}) {
  return <Background />;
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione um Horário',
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectProvider');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
