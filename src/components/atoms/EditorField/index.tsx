import { Control, useController } from 'react-hook-form';
import SunEditor from 'suneditor-react';
import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

type Props = SunEditorReactProps & {
  name: string;
  control: Control<any>;
};

const BUTTON_LIST = [
  ['undo', 'redo'],
  ['font', 'fontSize'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['removeFormat'],
  ['fontColor', 'hiliteColor'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list'],
  ['link'],
  ['fullScreen', 'showBlocks', 'codeView'],
  ['image']
];

export default function EditorField({ control, name, defaultValue, ...props }: Props) {
  const {
    field: { value, ...inputProps }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: defaultValue || ''
  });

  return (
    <SunEditor
      {...props}
      {...inputProps}
      defaultValue={value}
      setOptions={{
        buttonList: BUTTON_LIST
      }}
    />
  );
}
