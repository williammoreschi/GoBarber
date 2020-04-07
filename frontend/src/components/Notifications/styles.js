import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        width: 8px;
        height: 8px;
        top: 0px;
        right: 0px;
        content: '';
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;

  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0px;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0px;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: ${lighten(0.1, '#7159c1')};
    }
  }
  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        position: relative;
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
