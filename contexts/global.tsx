/* eslint-disable react/require-default-props */
import useColorScheme from 'hooks/useColorScheme';
import {
  createContext, Dispatch, ReactNode, SetStateAction, useMemo,
} from 'react';

export interface IConfig {
  theme: 'dark' | 'light';
}

interface IConfigContext {
  config: IConfig;
  setCurrentColorScheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const ConfigContext = createContext<IConfigContext>({
  config: {
    theme: 'dark',
  },
  setCurrentColorScheme: () => null,
});

interface IProps {
  children: ReactNode;
}

export default function ConfigContextComponent({
  children,
}: IProps) {
  const { currentColorScheme, setCurrentColorScheme } = useColorScheme();

  const values = useMemo(() => ({
    config: {
      theme: currentColorScheme,
    },
    setCurrentColorScheme,
  }), [currentColorScheme, setCurrentColorScheme]);

  return (
    <ConfigContext.Provider value={values}>
      {children}
    </ConfigContext.Provider>
  );
}
