import React, { useCallback, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetUserQuery } from '../../store/catalog';

import { UserInfoForm } from '../../components/UserInfoForm.tsx/UserInfoForm';
import { ArrowIconSvg } from '../../components/ArrowIconSvg';
import { ArrowIconMobileSvg } from '../../components/ArrowIconMobileSvg';
import { Popup } from '../../components/Popup/Popup';
import { Loader } from '../../components/Loader/Loader';
import { ErrorBlock } from '../../components/ErrorBlock/ErrorBlock';

import {
  ArrowIcon,
  ArrowIconMobile,
  CenterBlock,
  MainBlock,
  MainProfile,
  NavMenu,
  NavMenuLink,
  ProfileInfo,
  ProfileInfoField,
  UserCard,
  UserImg,
} from './Profile.styles';

export function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isShowPopup, setIsShowPopup] = useState(false);
  const timer = useRef(null);

  const {
    data: user,
    error: loadingError,
    isLoading: isAllLoading,
  } = useGetUserQuery(id);

  const saveProfile = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);

    setIsShowPopup(true);

    timer.current = setTimeout(() => setIsShowPopup(false), 4000);
  }, [setIsShowPopup, timer]);

  if (isAllLoading) {
    return <Loader />;
  }

  if (loadingError) {
    return <ErrorBlock error={loadingError} />;
  }

  return (
    <MainBlock>
      <CenterBlock>
        <NavMenu>
          <ArrowIcon onClick={() => navigate(-1)}>
            <ArrowIconSvg />
          </ArrowIcon>
          <ArrowIconMobile onClick={() => navigate(-1)}>
            <ArrowIconMobileSvg />
          </ArrowIconMobile>
          <NavMenuLink onClick={() => navigate(-1)}>Назад</NavMenuLink>
        </NavMenu>
        <MainProfile>
          <UserCard>
            <UserImg src="img/cat.png" alt="user photo" />
            <ProfileInfo>
              <ProfileInfoField $isActive>Данные профиля</ProfileInfoField>
              <ProfileInfoField>Рабочее пространство</ProfileInfoField>
              <ProfileInfoField>Приватность</ProfileInfoField>
              <ProfileInfoField>Безопасность</ProfileInfoField>
            </ProfileInfo>
          </UserCard>
          <UserInfoForm user={user} onSubmit={saveProfile} />
        </MainProfile>
      </CenterBlock>
      <Popup isShow={isShowPopup} onClose={() => setIsShowPopup(false)} />
    </MainBlock>
  );
}
