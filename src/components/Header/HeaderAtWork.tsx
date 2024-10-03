import React from 'react';

import { LogoSvg } from '../LogoSvg';
import { LikeIconSvg } from '../LikeIconSvg';
import { BellIconSvg } from '../BellIconSvg';

import {
  ActionIcons,
  Header,
  HeaderContent,
  HeaderHome,
  HeaderMenu,
  LogoText,
  UserImg,
  UserInfo,
  UserName,
} from './HeaderAtWork.styles';

export function HeaderAtWork() {
  return (
    <Header>
      <HeaderContent>
        <HeaderHome to="/">
          <LogoSvg />
          <LogoText>
            at-
            <span>work</span>
          </LogoText>
        </HeaderHome>
        <HeaderMenu>
          <ActionIcons>
            <LikeIconSvg />
            <BellIconSvg />
          </ActionIcons>
          <UserInfo>
            <UserName>Ivan1234</UserName>
            <UserImg src="img/cat.png" alt="user photo" />
          </UserInfo>
        </HeaderMenu>
      </HeaderContent>
    </Header>
  );
}
