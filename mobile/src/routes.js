import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

export default createAppContainer(
  createSwitchNavigator({
    SingIn,
    SingUp,
  }),
);
