import React, { useState } from 'react';

import { Menu, MenuItem, MenuList } from './KebabMenu.styles';
import { KebabMobileSvg } from '../KebabMobileSvg';
import { KebabMenuProps } from './KebabMenu.types';
import useClickOutside from '../../hooks/UseClickOutside';

export function KebabMenu({
  onArchive,
  onEdit,
  onHide,
  isActive,
}: KebabMenuProps) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const dropDownRef = useClickOutside(() => setVisible(false));

  return (
    <Menu onClick={toggleVisibility} ref={dropDownRef}>
      <KebabMobileSvg />
      {visible && (
        <MenuList onClick={toggleVisibility}>
          <MenuItem onClick={onEdit} $isActive={isActive}>Редактировать</MenuItem>
          <MenuItem onClick={onArchive} $isActive>
            {isActive ? 'Архивировать' : 'Активировать'}
          </MenuItem>
          <MenuItem onClick={onHide} $isActive={isActive}>Скрыть</MenuItem>
        </MenuList>
      )}
    </Menu>
  );
}
