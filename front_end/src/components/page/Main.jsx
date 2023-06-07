import React, { useState, useRef, useEffect } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import MainCard from '../Layout/MainCard';
import SubmitButton from '../Layout/SubmitButton';
import mainBack01 from '../../assets/images/mainBack01.png';

function MainPage() {
  let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingBottom: '80px',
    arrowNavigation:      true
  };

  return (
    <div id='main'>
      <SectionsContainer {...options}>
        <Section className='mainBox01'>
          <div className="content">
            <p>Welcome</p>
            <h1>Dlook에 오신걸 환영합니다.</h1>
            <p>
            청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다.<br/>
            붙잡아 만천하의 것은 있으며,<br/>
            그들에게 쓸쓸한 풀밭에 찾아 우는 것이다.<br/>
            이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.<br/>
            생생하며, 이상의 실현에 말이다.<br/> 
            그것은 얼마나 보는 새가 방황하여도,<br/>
            </p>
            <SubmitButton disableRipple onClick={() => document.location.href='/algorithms/step'}>알고리즘 문제 보러가기</SubmitButton>
          </div>
          <div className="back" style={ {
                background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' + mainBack01 + ') no-repeat center center',
                backgroundSize: 'cover',
                zIndex: '0'
          } }></div>
        </Section>
        <Section className='mainBox02' >
          <div className="content">
            <h1 style={{fontSize: '60px', fontWeight: '500'}}>불도조</h1>
            <p style={{ marginBottom: '20px' }}>
              청춘의 청춘 남는 못하다 봄바람을 있는 속에 실로 것이다.<br/>
              붙잡아 만천하의 것은 있으며,<br/>
              그들에게 쓸쓸한 풀밭에 찾아 우는 것이다.<br/>
              이상 가치를 무엇을 피부가 공자는 크고 속에 대고, 이것이다.<br/>
              생생하며, 이상의 실현에 말이다.<br/> 
              그것은 얼마나 보는 새가 방황하여도,<br/>
              </p>
              <div className="card"><MainCard/></div>
          </div>
        </Section>
        <Section className='mainBox03'>
          <div className="content">
            <h1 style={{fontSize: '60px', fontWeight: '500'}}>공지사항</h1>
          </div>
        </Section>
      </SectionsContainer>
    </div>
  )
}

export default MainPage