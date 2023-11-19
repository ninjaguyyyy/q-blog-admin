import { Modal } from 'antd';

type Props = {
  isSubmitting: boolean;
  onOk: () => void;
  onCancel: () => void;
};

export default function ConfirmationModal({ isSubmitting, onOk, onCancel }: Props) {
  return (
    <Modal
      title="Confirmation"
      open={true}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={isSubmitting}>
      <p>Are you sure?</p>
    </Modal>
  );
}
