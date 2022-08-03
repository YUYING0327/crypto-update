import { useEffect, useState } from 'react';
import { ArrowUp } from '../icons/icons';

import { classNames } from '../utils';

export const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-5">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisable ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 rounded-full shadow-sm bg-yellow-500 transition-opacity hover:bg-yellow-600 foucs:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400'
        )}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};
