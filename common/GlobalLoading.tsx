import {Spin} from 'antd';

export const GlobalLoading = ({enabled}: { enabled: boolean }) => {
  if (!enabled) {
    return null;
  }

  return <div style={{
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }}>
    <Spin size={'large'}
          style={{
            left: '50%',
            top: '50%',
            position: 'absolute'
          }}
    />
  </div>;
};