import React from 'react';
import { ErrorBlockProps, isFetchBaseQueryError } from './ErrorBlock.types';

export function ErrorBlock({ error }: ErrorBlockProps) {
  return (
    <div>
      Ошибка запроса:
      {' '}
      {isFetchBaseQueryError(error) ? error.status : error.code}
    </div>
  );
}
