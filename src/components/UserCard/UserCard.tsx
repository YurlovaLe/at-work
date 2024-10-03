import React from 'react';
import {
  User, UserCity, UserCompany, UserInfo, UserInfoDetails, UserName, UserPhoto, UserNameBox,
} from './UserCard.styles';
import { UserCardProps } from './UserCard.types';
import { KebabMenu } from '../KebabMenu/KebabMenu';

export function UserCard({
  name,
  company,
  city,
  isArchive = false,
  onEdit,
  onArchive,
  onHide,
}: UserCardProps) {
  return (
    <User>
      <UserPhoto $isArchive={isArchive} src="img/cat.png" alt="user photo" />
      <UserInfo>
        <UserInfoDetails>
          <UserNameBox>
            <UserName $isArchive={isArchive}>{name}</UserName>
            <KebabMenu
              onEdit={onEdit}
              onArchive={onArchive}
              onHide={onHide}
              isActive={!isArchive}
            />
          </UserNameBox>
          <UserCompany $isArchive={isArchive}>{company}</UserCompany>
        </UserInfoDetails>
        <UserCity $isArchive={isArchive}>{city}</UserCity>
      </UserInfo>
    </User>
  );
}
