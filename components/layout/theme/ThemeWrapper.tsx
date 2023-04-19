import React, {useEffect} from 'react';
import {ConfigProvider, theme} from 'antd';
import {useRecoilState} from 'recoil';
import {themeState} from './ThemeState';
import {GlobalLoading} from '../../../common/GlobalLoading';
import {Theme} from './types';
import {PlanStorage} from '../../../api-lib';

const THEME_MAP = Object.freeze({
  [Theme.light]: theme.defaultAlgorithm,
  [Theme.dark]: theme.darkAlgorithm,
});

export const ThemeWrapper = ({children}: React.PropsWithChildren) => {
  const [themeValue, setThemeValue] = useRecoilState(themeState);
  useEffect(() => {
    if (themeValue !== null) {
      return;
    }
    PlanStorage.getTheme()
      .then((theme) => {
        if (theme) {
          setThemeValue(theme);
          return;
        }
        setThemeValue(
          window?.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches ?
            Theme.dark :
            Theme.light);
      });
  }, [themeValue, setThemeValue]);

  if (!themeValue) {
    return <GlobalLoading />;
  }

  return <ConfigProvider theme={{
    algorithm: [
      THEME_MAP[themeValue] || THEME_MAP[Theme.light],
    ]
  }}>
    {children}
  </ConfigProvider>;
};