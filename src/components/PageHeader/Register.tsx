import React, { FC, MouseEvent } from 'react';
import { Modal, Button, Form, Input } from 'antd'
import './style.less'

export enum RegisterType {
    register,
    sign
}
export interface PropType{
    type: RegisterType,
    visible: boolean,
    onOK?: (e: MouseEvent<HTMLButtonElement>) => void ,
    onCancel?: (e: MouseEvent<HTMLElement>) => void,
    setType: (type:RegisterType)=> void
}
const Register:FC<PropType> = (props:PropType) => {
    const { visible, onOK, onCancel, setType, type } = props;
    return (
        <div className='register'>
            <Modal
              title={type === RegisterType.register?'注册':'登入'}
              visible={visible}
              onOk = {onOK} 
              onCancel = {onCancel}
              footer = {null}
            >
              <Form name='register'>
                <Form.Item
                  label=''
                  name='username'
                  colon={false}
                  rules={[{
                    required: true,
                    message: 'Please enter you username'
                  }]}
                >
                  <Input placeholder="注册手机号"></Input>
                </Form.Item>
                <Form.Item
                  label=''
                  name='password'
                  colon={false}
                  rules={[{
                    required: true,
                    message: 'Please enter you password'
                  }]}
                >
                  <Input.Password placeholder="password"></Input.Password>
                </Form.Item>
              </Form>
              <Button block type='primary' className='primary-button'>{`立即${type===RegisterType.sign?"登入":"注册"}`}</Button>
              <div className='footer'>
                  {
                    type === RegisterType.register?
                    (
                      <Button 
                        type='link'
                        onClick={() => {setType(RegisterType.sign)}}
                      >登陆</Button>
                    ):
                    (
                      <Button 
                        type='link'
                        onClick={() => {setType(RegisterType.register)}}
                      >注册
                      </Button>
                    )
                  }

              </div>
            </Modal>
        </div>
    )
}
export default Register