import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { insertDataToStep2 } from '../redux/addressSlice';
import { Form, Input } from 'antd';


const Step2 = () => {

  const data = useSelector((state: RootState) => state.addressReducer.addresses);
  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    dispatch(insertDataToStep2({
        ...data,
        [name]: value
    }))
  }

  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='w-full flex flex-col justify-center items-center h-full'
  >
    <Form.Item
      label="Address line one"
      name="address1"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your address!' }]}
    >
      <Input name='address1' defaultValue={data.address1} value={data.address1} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Address line two"
      name="address2"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your address!' }]}
    >
      <Input name='address2' defaultValue={data.address2} value={data.address2} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="City"
      name="city"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your city!' }]}
    >
      <Input name='city' defaultValue={data.city} value={data.city} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="State"
      name="state"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your state!' }]}
    >
      <Input name='state' defaultValue={data.state} value={data.state} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Pin Code"
      name="pincode"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your pincode!' }]}
    >
      <Input type='number' name='pincode' defaultValue={data.pincode} value={data.pincode} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Country"
      name="country"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your country!' }]}
    >
      <Input name='country' defaultValue={data.country} value={data.country} onChange={handleChange}/>
    </Form.Item>

  </Form>
  )
}

export default Step2