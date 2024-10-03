import styled from 'styled-components';

export const User = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: #FDFDFD;

  @media (min-width: 776px) {
    width: 360px;
    flex-direction: row;
    gap 20px;
    padding: 24px;
  };
`;

export const UserPhoto = styled.img<{$isArchive: boolean}>`
  width: 130px;
  height: 120px;
  border-radius: 8px;
  filter: ${(props) => (props.$isArchive ? 'grayscale(1)' : 'grayscale(0)')};

  @media (min-width: 776px) {
    width: 112px;
  }
`;

export const UserInfo = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 776px) {
    width: 180px;
    gap: 42px;
  }
`;

export const UserInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserNameBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.div<{$isArchive: boolean}>`
  font-size: 18px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  color: ${(props) => (props.$isArchive ? '#595959' : '#22A0BC')};

  @media (min-width: 776px) {
    font-size: 20px;
  };
`;

export const UserCompany = styled.div<{$isArchive: boolean}>`
  font-size: 14px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  color: ${(props) => (props.$isArchive ? '#9C9C9C' : '#595959')};

    @media (min-width: 776px) {
      font-size: 16px;
      line-weight: 500px;
    };
`;

export const UserCity = styled.div<{$isArchive: boolean}>`
  color: #9C9C9C;
  font-size: 10px;
  color: ${(props) => (props.$isArchive ? '#DADADA' : '#9C9C9C')};

  @media (min-width: 776px) {
    font-size: 14px;
    line-weight: 500px;
  };
`;
