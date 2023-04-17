import {themeState} from './ThemeState';
import {useRecoilState} from 'recoil';
import {Switch} from 'antd';
import {Theme} from './types';

export const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <Switch onChange={(value) => setTheme(value ? Theme.light : Theme.dark)}
            unCheckedChildren={'Dark'}
            checkedChildren={'Light'}
            checked={theme === Theme.light}
    />
  )
}