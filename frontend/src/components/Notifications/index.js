import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import socketio from 'socket.io-client';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setvVsible] = useState(false);
  const [notifications, SetNotifications] = useState([]);

  const hasUnread = useMemo(
    // () => Boolean(notifications.find(notification => notification.read === false)),
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  const user = useSelector(state => state.user.profile);

  // Criando a conexão socket e passando o id do usuário como um parâmetro adicional
  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: user.id,
        },
      }),
    [user.id]
  );

  useEffect(() => {
    socket.on('notification', notification => {
      SetNotifications([notification, ...notifications]);
    });
  }, [socket, notifications]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          }
        ),
      }));
      SetNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setvVsible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    SetNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications size="20" color="#7519c1" />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  onClick={() => handleMarkAsRead(notification._id)}
                  type="button"
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
