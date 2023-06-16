import { useEffect, useRef } from 'react';

type EventCallback = (event: MouseEvent | TouchEvent) => void;

function useClickOutside(ref: React.RefObject<HTMLElement>, callback: EventCallback) {
  const savedCallback = useRef<EventCallback>(callback);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        savedCallback.current(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref]);
}

export default useClickOutside;