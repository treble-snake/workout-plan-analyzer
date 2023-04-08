import {Alert} from 'antd';

type Props = {
  text: string;
}

export const ErrorMessage = (props: Props) => {
  const {text} = props;

  return (
    <Alert showIcon type={'error'} banner description={text} />
  );
};