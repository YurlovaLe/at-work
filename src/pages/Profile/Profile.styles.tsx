import styled from 'styled-components';

export const MainBlock = styled.main`
  background-color: #f4f4f4;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 13px 0;
  margin-bottom: 20px;

  @media (min-width: 760px) {
    padding: 20px 0;
    margin-bottom: 24px;
  }
`;

export const ArrowIcon = styled.div`
  cursor: pointer;
  display: none;
  @media (min-width: 760px) {
    display: flex;
  };
`;

export const ArrowIconMobile = styled.div`
  cursor: pointer;
  display: flex;

  @media (min-width: 760px) {
    display: none;
  };
`;

export const NavMenuLink = styled.div`
  font-size: 16px;
  color: #797a82;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 760px) {
    font-size: 20px;
  }
`;

export const CenterBlock = styled.div`
  padding: 0 17px 32px 16px;
  max-width: 1160px;
  margin: 0 auto;
`;

export const MainProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 32px;
`;

export const UserCard = styled.div`
  min-width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fdfdfd;
  padding: 28px;
  border-radius: 16px;
  flex: 1;
`;
export const UserImg = styled.img`
  align-self: center;
  width: 287px;
  height: 187px;
  border-radius: 8px;
  object-fit: cover;

  @media (min-width: 760px) {
    height: auto;
  }
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileInfoField = styled.div<{ $isActive?: boolean }>`
  padding-bottom: 8px;
  border-bottom: solid 1px #dadada;
  color: ${(props) => (props.$isActive ? '#161616' : '#9C9C9C')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #22a0bc;
  }

  @media (min-width: 760px) {
    font-size: 16px;
    padding-bottom: 12px;
  }
`;
