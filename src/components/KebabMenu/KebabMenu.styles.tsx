import styled from 'styled-components';

export const Menu = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MenuList = styled.div`
  position: absolute;
  right: 0;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: #FDFDFD;
  color: #161616;
  font-weight: 500;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: 0px 0px 2px 0px #5A5A5A;

  @media (min-width: 776px) {
    font-size: 16px;
    min-width: 200px;
  };
`;

export const MenuItem = styled.div<{$isActive?: boolean}>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
  cursor: pointer;
  padding: 8px 12px;

  &:hover {
    color: #22A0BC;
  }
`;
