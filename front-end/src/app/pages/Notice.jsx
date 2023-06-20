import React from 'react';
// import { useState } from 'react';
import 'app/style/Tab.css';
import FreeBoard from '../components/Board/FreeBoard';
// import QaBoard from '../components/Board/QaBoard';
import 'app/style/style.css';

function notice() {
  return (
    <div className="container">
      <h1>공지사항</h1>
      <FreeBoard />
    </div>
  );
}

export default notice;
