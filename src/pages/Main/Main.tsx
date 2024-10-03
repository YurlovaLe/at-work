import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUsersQuery } from '../../store/catalog';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectUsers,
  setActive,
  setArchive,
  setHide,
} from '../../store/slices';
import { Loader } from '../../components/Loader/Loader';
import { ErrorBlock } from '../../components/ErrorBlock/ErrorBlock';
import { UserCard } from '../../components/UserCard/UserCard';

import {
  Users,
  MainBlock,
  MainCenterBlock,
  Title,
  UserCards,
} from './Main.styles';

export function Main() {
  const navigate = useNavigate();
  const {
    data: allUserData = [],
    error: loadingError,
    isLoading: isAllLoading,
  } = useGetUsersQuery();

  const { archiveUsers, hideUsers } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const allUsers = useMemo(
    () => allUserData.slice(0, 6).map(({
      id, username, address, company,
    }) => ({
      id,
      username,
      city: address.city,
      company: company.name,
    })),
    [allUserData],
  );

  const activeUsersList = useMemo(
    () => (
      allUsers.filter(({ id }) => !archiveUsers.includes(id) && !hideUsers.includes(id))
    ),
    [allUsers, archiveUsers, hideUsers],
  );

  const archiveUsersList = useMemo(
    () => (
      allUsers.filter(({ id }) => archiveUsers.includes(id))
    ),
    [allUsers, archiveUsers],
  );

  if (isAllLoading) {
    return <Loader />;
  }

  if (loadingError) {
    return <ErrorBlock error={loadingError} />;
  }

  return (
    <MainBlock>
      <MainCenterBlock>
        <Users>
          <Title>Активные</Title>
          <UserCards>
            {activeUsersList.map((user) => (
              <UserCard
                key={user.id}
                name={user.username}
                company={user.company}
                city={user.city}
                onEdit={() => navigate(`user/${user.id}`)}
                onArchive={() => dispatch(setArchive({ id: user.id }))}
                onHide={() => dispatch(setHide({ id: user.id }))}
              />
            ))}
          </UserCards>
        </Users>
        {!!archiveUsersList.length
        && (
          <Users>
            <Title>Архив</Title>
            <UserCards>
              {archiveUsersList.map((user) => (
                <UserCard
                  key={user.id}
                  name={user.username}
                  company={user.company}
                  city={user.city}
                  isArchive
                  onArchive={() => dispatch(setActive({ id: user.id }))}
                />
              ))}
            </UserCards>
          </Users>
        )}
      </MainCenterBlock>
    </MainBlock>
  );
}
