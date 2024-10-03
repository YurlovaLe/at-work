import styled from 'styled-components';

export const MainBlock = styled.main`
  display: flex;
  justify-content: center;
  padding: 32px 15px 40px 16px;

  @media (min-width: 776px) {
    padding: 40px 0 32px 0;
  };
`;

export const MainCenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;


  @media (min-width: 776px) {
    gap: 40px;
  };
`;

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 537px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  };

  @media (min-width: 699px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  };

  @media (min-width: 776px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 40px;
    row-gap: 32px;
  };

  @media (min-width: 1176px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  };
`;

export const Title = styled.h2`
  padding-bottom: 16px;
  border-bottom: solid 1px #DADADA;
  font-weight: 600;
  font-size: 24px;
  color: #161616;
`;
