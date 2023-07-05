import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { insertDataToStep1 } from '../redux/formSlice';
import { Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

const Step1 = () => {

  const data = useSelector((state: RootState) => state.formReducer.value);
  const dispatch = useDispatch();
  const [Phone, setPhone] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    dispatch(insertDataToStep1({
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
      label="Username"
      name="name"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input type='text' name='name' defaultValue={data.name} value={data.name} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input type='email' name='email' defaultValue={data.email} value={data.email}  onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Phone number"
      name="phone"
      className='w-[30%]'
      rules={[{ required: true, message: 'Please input your phone number!' }]}
    >

      <PhoneInput
  country={'in'}
  value={Phone}
  onChange={(phone) => {dispatch(insertDataToStep1({
    ...data,
    "phone": phone
  }))
  setPhone(phone)}}
/>
    </Form.Item>
  </Form>
  )
}

export default Step1