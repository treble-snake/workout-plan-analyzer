import {Menu} from 'antd';
import {ThemeSwitch} from '../theme/ThemeSwitch';
import {AuthButton} from './AuthButton';

export const HeaderActions = () => {
  return (
    <Menu theme="dark" mode="horizontal"
          selectable={false}
          style={{
            paddingRight: 130,
            backgroundImage: 'url(/logo-ship-light.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
          }}
          items={[
            {
              label: <ThemeSwitch />,
              key: 'dark-mode',
            },
            {
              label: <AuthButton />,
              key: 'auth'
            }
          ]}
    />
  );
};