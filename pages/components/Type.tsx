import React, { useState } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

export default function Type() {

  function ifNumIsOne(props: any) {
    return <TypeWriterEffect
    textStyle={{
      display: 'none',
      textAlign: 'center',
      fontFamily: 'Red Hat Display',
      color: '#f00',
      fontWeight: 500,
      fontSize: '1.5em',
    }}
    startDelay={1000}
    cursorColor="#f00"
    multiText={[
      '모든 세트가 끝이 났습니다 !',
      '수고하셨습니다 !'
    ]}
    multiTextDelay={500}
    typeSpeed={100}
    id='Type'
  />
  }

  const [num, setNum] = useState<number>()
  const [submit, setSubmit] = useState<any>(false)
  const checkSubmit = () => setSubmit(true);

  const visibleStartBtn = () => {
    if (submit === true) {
      const box = document.getElementById('timerBox')
      const checkNum = document.getElementById('checkNum')
      checkNum.style.display = 'none'
      box.style.display = ''
    }
  }

  const changeNum = (e: any) => {
    setNum(e.target.value)
  }

  const minusNum = (e: any) => {
    setNum(num - 1)
    if (num == 1) {
      const box = document.getElementById('timerBox')
      const type = document.getElementById('Type')
      box.style.display = 'none'
      // type.style.display = ''
    }
  }

  return (
    <div>
      <div id="checkNum">
        <input type='number' pattern='\d*' placeholder="횟수선택" className="ChooseNum" min='1' max='25' onChange={changeNum} value={num} style={{ width: '5rem' }} />
        <button className="identifyBtn" onClick={() => { checkSubmit(), visibleStartBtn() }} style={{ marginLeft: '6px', marginBottom: '3rem' }}>확인</button> <br />
      </div>

      <div id="timerBox" style={{ display: 'none' }}>
        <div className="latestNum">남은 세트 수 : {num}회</div>
        <button className='start'>시작</button>
        <button className='stop' style={{ marginLeft: '1rem' }} onClick={minusNum}>종료</button>
      </div>

      
    </div>
  )
}
