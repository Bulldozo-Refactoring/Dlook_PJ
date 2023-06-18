import React from 'react';
import { useState } from 'react';
import 'app/style/Tab.css';
import FreeBoard from '../components/BoardTab/FreeBoard';
import QaBoard from '../components/BoardTab/QaBoard';
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
