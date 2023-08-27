//创建一个扫描页面，同时包含可跳转的按钮选项用于切换页面到输入页面。
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import './scan.css';

// 整个Scan页面的布局都通过CSS来实现，这里只需要将Webcam组件放在一个div中即可。
function Scan() {
  const webcamRef = React.useRef(null);
  const navigate = useNavigate();

  const navigateToInput = () => {
    navigate("/input");
  }

  return (
    <div className='scan-container'>
        <div className='QR-camera-container'>
            <Webcam
                className='QR-camera' //需要确保 <Webcam /> 组件有一个 className="Webcam" 的属性，这样 CSS 才能正确地应用到它上面
                audio={false}
                ref={webcamRef}
                mirrored={true}
            />
        </div>

        <div className='switch-button-container'>
            <button className='scan-button'>二维码扫描</button>
            <button className='input-button' onClick={navigateToInput}>输入条形码</button>
        </div>

        <p className='scan-tip'>请将二维码置于框内</p>
    </div>
  );
}

export default Scan;
