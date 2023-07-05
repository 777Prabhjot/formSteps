import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFiles } from '../redux/uploadSlice';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';



const Step3 = () => {
  const files = useSelector((state: RootState) => state.uploadReducer.values);
  const dispatch = useDispatch();

  const props: UploadProps = {
    beforeUpload: (file) => {
      const isValid = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg';
      if (!isValid) {
        message.error(`${file.name} is not a png | jpg | jpeg file`);
      }
      return isValid || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      dispatch(addFiles(info.fileList));
    },
  };

  return (
    <Upload {...props} multiple={true} defaultFileList={files}>
    <Button icon={<UploadOutlined />}>Upload Image</Button>
  </Upload>
  )
}

export default Step3