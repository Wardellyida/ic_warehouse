import React, { useState } from 'react';

function SwichButton({ label, active, onClick }) {
    return (
      <button
        className={`${label}-button ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        {label === 'scan' ? '二维码扫描' : '输入条形码'}
      </button>
    );
  }

export default SwichButton;