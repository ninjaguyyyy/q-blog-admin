import { Button } from 'antd';
import { ReactNode } from 'react';
import './index.scss';

type Props = {
  icon: ReactNode;
};

export default function IconButton({ icon }: Props) {
  return (
    <Button
      type="primary"
      icon={icon}
      size="middle"
      className="icon-button !w-[34px] h-[34px] rounded-xl"
    />
  );
}
