import {Menu} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const TopMenu = () => {
  const router = useRouter();
  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[router.asPath]}
          style={{
            // TODO: this is some shit
            minWidth: 250
          }}
          items={[
            {
              label: <Link href={'/'}>Plans</Link>,
              key: '/'
            }, {
              label: <Link href={'/help'}>Help</Link>,
              key: '/help'
            }, {
              label: <Link href={'/sources'}>Sources</Link>,
              key: '/sources'
            }
          ]}
    />
  );
};