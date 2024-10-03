import styled from 'styled-components';
import { UserCard } from '../../pages/Profile/Profile.styles';

export const UserInfo = styled(UserCard)`
  color: #161616;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 3;
`;

export const UserInfoTitle = styled.div`
  font-weight: 600px;
  font-size: 24px;
  color: #161616;
  padding-bottom: 16px;
  border-bottom: solid 1px #dadada;
`;

export const UserInfoBlock = styled.form`
  max-width: 420px;

  > * + * {
    margin-top: 20px;

    @media (min-width: 760px) {
      margin-top: 24px;
    }
  }
`;

export const UserInfoBlockField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FieldLabel = styled.div`
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 760px) {
    font-size: 18px;
  }
`;

export const FieldInput = styled.input<{ $isErrored: boolean }>`
  border: 2px solid ${(props) => (props.$isErrored ? 'red' : '#DADADA')};
  border-radius: 50px;
  padding: 12px 8px 12px 16px;
  font-weight: 500;
  font-size: 14px;
  color: #161616;

  &::placeholder {
    color: #161616;
  }

  @media (min-width: 760px) {
    font-size: 16px;
  }
`;

export const FieldError = styled.div`
  color: red;
`;

export const FormAction = styled.div`
  margin-top: 24px;

  @media (min-width: 760px) {
    margin-top: 32px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 42px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  background-color: #161616;
  color: #fdfdfd;

  &:hover {
    background-color: #f4f4f4;
    border-shadow: none;
    border-color: #f4f4f4;
    color: #595959;
  }

  @media (min-width: 760px) {
    width: auto;
  }
`;
