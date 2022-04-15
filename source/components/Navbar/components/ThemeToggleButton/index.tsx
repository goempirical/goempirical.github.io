import { useContext } from 'react';
import clsx from 'clsx';

import { ConfigContext } from '@contexts/global';
import { Icons } from '@components/Icons/constants';
import { defaultConfig } from '@components/Navbar/constants';

import { IThemeToggleButton } from './types';

function ThemeToggleButton({ className }: IThemeToggleButton) {
  const {
    config: {
      theme,
    },
    setCurrentColorScheme,
  } = useContext(ConfigContext);

  const handleClick = () => {
    if (theme === 'dark') {
      setCurrentColorScheme('light');
    } else {
      setCurrentColorScheme('dark');
    }
  };

  const title = defaultConfig.themeToggleButton.getTitle(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      className={clsx('h-6 w-6 overflow-hidden bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 rounded-md', className)}
      type="button"
      onClick={handleClick}
      title={title}
    >
      <div className="flex items-center justify-start -translate-x-6 dark:translate-x-0 transition-transform">
        <div className="flex items-center justify-center flex-shrink-0 h-6 w-6">
          <Icons.Sun />
        </div>
        <div className="flex items-center justify-center flex-shrink-0 h-6 w-6">
          <Icons.Moon />
        </div>
      </div>
    </button>
  );
}

export default ThemeToggleButton;
