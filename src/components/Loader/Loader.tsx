import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100%{transform: rotate(1turn)}
`;

export const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  margin: 30px auto;
  background:
    conic-gradient(from 135deg at top,currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
    radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
    radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
  background-repeat: no-repeat;
  animation: ${animation} 1s infinite linear;
`;
