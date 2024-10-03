import React, { useEffect } from 'react';

export default function useClickOutside(callback: () => void): React.Ref<HTMLDivElement> {
  const ref = React.useRef(null);
  const rootElement = document.querySelector('body');

  useEffect(() => {
    function registerClickEventListener() {
      rootElement.addEventListener('click', (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      });
    }

    function unRegisterClickEventListener() {
      rootElement.addEventListener('click', (event) => {
        if (event.target === ref.current) {
          callback();
        }
      });
    }

    registerClickEventListener();
    return () => {
      unRegisterClickEventListener();
    };
  }, [rootElement, callback]);

  return ref;
}
