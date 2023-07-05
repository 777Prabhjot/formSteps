import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStep } from '../redux/stepSlice';
import { Button, message, Steps, theme } from 'antd';
import Step1 from '../components/Step1';
import { RootState } from '../redux/store';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import { onFormSubmit } from '../services/form';
import Step4 from '../components/Step4';
import { useNavigate } from 'react-router-dom';

const steps = [
    {
      title: 'Step 1',
      content: <Step1 />,
    },
    {
      title: 'Step 2',
      content: <Step2 />,
    },
    {
      title: 'Step 3',
      content: <Step3 />,
    },
    {
        title: 'Finish',
        content: <Step4 />,
      },
  ];

const FormPage: React.FC = () => {
    const data = useSelector((state: RootState) => state.formReducer.value);
    const step = useSelector((state: RootState) => state.stepReducer.step);
    const addresses = useSelector((state: RootState) => state.addressReducer.addresses);
    const upload = useSelector((state: RootState) => state.uploadReducer.values);

    const dispatch = useDispatch();
    const isEmpty = Object.values(data).every(x => x !== '');
    const isAdressEmpty = Object.values(addresses).every(x => x !== '');

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(step);
    const navigate = useNavigate();
    const userToken = localStorage.getItem('token');
  
    const next = () => {
      setCurrent(current + 1);
      dispatch(changeStep(current + 1));
    };
  
    const prev = () => {
      setCurrent(current - 1);
      dispatch(changeStep(current - 1));
    };
  
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
  
    const contentStyle: React.CSSProperties = {
      lineHeight: '260px',
      textAlign: 'center',
      height: '80vh',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };

    const handleSubmit = () => {
      const multiFiles: Array<any> = [];
      upload.map((item:any) => multiFiles.push(item.originFileObj))
      console.log(multiFiles);
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phone_number', data.phone)
        formData.append('address_1', addresses.address1)
        formData.append('address_2', addresses.address2)
        formData.append('city', addresses.city)
        formData.append('state', addresses.state)
        formData.append('pincode', addresses.pincode)
        formData.append('country', addresses.country)
        formData.append('geolocation', addresses.city)
        formData.append('single_file', upload[0]?.originFileObj)
        if(upload.length > 1){
          formData.append('multi_ups1', upload[1]?.originFileObj)
        }else{
          formData.append('multi_ups1', upload[0]?.originFileObj)
        }
        if(upload.length > 2){
          formData.append('multi_ups2', upload[2]?.originFileObj)
        }
        else if(upload.length > 3){
          formData.append('multi_ups3', upload[3]?.originFileObj)
        }
        onFormSubmit(formData).then((res) => {
          if(res.status === 200){
            message.success('Form submitted successfully');
            setCurrent(current + 1);
            dispatch(changeStep(current + 1))
          }
        }).catch((err) => {
          console.log(err)
        });
    }

    useEffect(() => {
      if(!userToken){
        navigate('/');
      }
    },[])
  
    return (
      <>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && step !== 2 && (
            <Button disabled={step === 0 && !isEmpty || step === 1 && !isAdressEmpty} type="primary" className='bg-blue-400' onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button type="primary" disabled={step === 2 && !upload?.length} className='bg-blue-400' onClick={handleSubmit}>
              Submit
            </Button>
          )}
          {current > 0 && step !== 3 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  };

export default FormPage