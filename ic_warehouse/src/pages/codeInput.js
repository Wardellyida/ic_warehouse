//创建一个扫描页面，同时包含可跳转的按钮选项用于切换页面到输入页面。
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './codeInput.css';

// 整个Scan页面的布局都通过CSS来实现，这里只需要将Webcam组件放在一个div中即可。
function CodeInput() {
    const navigate = useNavigate();

    const navigateToInput = () => {
        navigate("/scan");
    }

    return (
        <div className='input-container'>
            <textarea className='Barcode-number-input' placeholder='请输入条形码'></textarea>

            <div className='switch-button-container'>
                <button className='scan-button' onClick={navigateToInput}>二维码扫描</button>
                <button className='input-button'>输入条形码</button>
            </div>

            <p className='scan-tip'>请将二维码下方的条形码输入</p>
        </div>
    );
}

export default CodeInput;
