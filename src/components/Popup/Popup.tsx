import React from 'react';
import {
  CloseButton,
  Overlay,
  PopupBody,
  PopupText,
} from './Popup.styles';
import { CloseSvg } from '../CloseSvg';
import { SuccessSvg } from '../SuccessSvg';
import { PopupProps } from './Popup.types';

export function Popup({ isShow, onClose }: PopupProps) {
  if (!isShow) {
    return null;
  }

  return (
    <Overlay>
      <PopupBody>
        <CloseButton onClick={onClose}>
          <CloseSvg />
        </CloseButton>
        <SuccessSvg />
        <PopupText>Изменения сохранены!</PopupText>
      </PopupBody>
    </Overlay>
  );
}
