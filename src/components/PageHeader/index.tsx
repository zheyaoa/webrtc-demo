import React, { FC, useState, MouseEvent } from 'react';
import { Button, Menu } from 'antd'
import Register, { RegisterType } from './Register'
import './style.less'
import { ClickParam } from 'antd/lib/menu';

interface Props{

}
enum MenuEnums{
    Home = 'home',
    Course = 'course'
}
const PageHeader:FC<Props> = () => {
    const [ visible, setVisiable ] =  useState(false);
    const [ type, setType ] = useState(RegisterType.register)
    const [ menuKey, setMenuKey ] = useState(MenuEnums.Home)
    const handleClick = (type:RegisterType) => {
        setVisiable(true);
        setType(type);
    }
    const handleCancel:(e: MouseEvent<HTMLElement>) => void = () => {
        setVisiable(false)
    }
    const handleMenuClick = (param:ClickParam) => {
        setMenuKey(param.key as MenuEnums)
    }
    return (
        <div className='page-header'>
            <div className='right'>
                <Menu mode="horizontal" 
                    onClick = {handleMenuClick}
                    selectedKeys={[menuKey]}>
                    <Menu.Item key='home'> 首页 </Menu.Item>
                    <Menu.Item key='course'> 选课中心 </Menu.Item>
                </Menu>
                <div className='btn-group'>
                    <Button 
                        type='primary' 
                        shape='round'
                        onClick = {() => handleClick(RegisterType.sign)}
                    >登入</Button>
                    <Button 
                        shape='round'
                        onClick= {() => handleClick(RegisterType.register)}    
                    >注册</Button>
                </div>
            </div>
            <Register 
                type = {type}
                visible={visible}
                onCancel = {handleCancel}
                setType = {setType}
            ></Register>
        </div>
    )
}
export default PageHeader;