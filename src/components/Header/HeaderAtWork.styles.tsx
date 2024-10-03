import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #FDFDFD;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 13px 16px;

  @media (min-width: 776px) {
  padding: 16px 10px;
  max-width: 1140px;
  };
`;

export const HeaderHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoText = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #333153;

  span {
    font-weight: 700;
  }
`;

export const UserImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50px;

  @media (min-width: 776px) {
    width: 20px;
    height: 20px;
  };
`;

export const HeaderMenu = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const ActionIcons = styled.div`
  display: none;

  @media (min-width: 776px) {
    display: flex;
    gap: 4px;
    align-items: center;
  };
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const UserName = styled.div`
  line-height: 21.86px;
  display: none;
  
  @media (min-width: 776px) {
    display: block;
  };
`;
