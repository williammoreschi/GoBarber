import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications';

import logo from '~/assets/images/logo_small.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>William Moreschi</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/55/abott@adorable.png"
              alt="William Moreschi"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
