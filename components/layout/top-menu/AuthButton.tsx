import {signIn, signOut, useSession} from 'next-auth/react';
import {Avatar, Button, Space, Tooltip} from 'antd';
import React from 'react';
import {LoginOutlined, LogoutOutlined} from '@ant-design/icons';
import {identity} from 'ramda';

export const AuthButton = () => {
  const {data: session} = useSession();

  if (!session) {
    return <Button
      type={'primary'}
      onClick={() => signIn()} icon={<LoginOutlined />}>
      Sign in
    </Button>;
  }

  const initials = (session.user?.name ?? session.user?.email ?? '')
    .split(' ')
    .map((s) => s[0])
    .join('') || '?';

  const fullName = [session.user?.name, session.user?.email].filter(identity);
  if (fullName[1]) {
    fullName[1] = `<${fullName[1]}>`;
  }

  return (
    <Space>
      <Tooltip title={`You are signed in as ${fullName.join(' ')}`}>
        <Avatar size={'large'}>{initials}</Avatar>
      </Tooltip>
      <Tooltip title={`Sign Out`}>
        <Button onClick={() => signOut()} icon={<LogoutOutlined />} />
      </Tooltip>
    </Space>
  );
};