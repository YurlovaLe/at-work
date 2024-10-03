import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(22, 22, 22, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBody = styled.div`
  position: relative;
  background-color: #FDFDFD;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
`;

export const PopupText = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
