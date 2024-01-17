import { Button, notification } from 'antd';
import { useForm } from 'react-hook-form';

import EditorField from 'components/atoms/EditorField';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import InputLabel from 'components/atoms/InputLabel';
import InputField from 'components/atoms/InputField';

type FormData = {
  test: string;
};

export default function CreateOrUpdatePost() {
  // Notification
  const [api, notiContextHolder] = notification.useNotification();

  // Form
  const { control, handleSubmit } = useForm<FormData>();

  // Function
  const onSubmit = (data: FormData) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  return (
    <div className="page-management-container">
      <div className="heading px-6 py-6 font-medium text-lg">Create Post</div>

      <div className="section px-6 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-4">
            <InputLabel value="Title" required={true} className="mb-2" />
            <InputField control={control} name="test" />
          </div>

          {/* Content */}
          <div>
            <InputLabel value="Content" required={true} className="mb-2" />
            <EditorField control={control} name="test" />
          </div>

          <Button htmlType="submit" type="primary" size="large">
            Submit
          </Button>
        </form>
      </div>

      {notiContextHolder}
    </div>
  );
}
