import React, { useState } from 'react'
import Typewtiter from './Typewtiter'

export default function Type() {

  const [num, setNum] = useState<number>()
  const [submit, setSubmit] = useState<any>(false)
  const [conditon, setConditon] = useState<boolean>(false)
  const checkSubmit = () => setSubmit(true);

  const renderCondition = conditon
    ? <Typewtiter />
    : <div />

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

  const minusNum = () => {
    setNum(num - 1)
    if (num == 1) {
      const container = document.getElementById('container')
      const box = document.getElementById('timerBox')
      box.style.display = 'none'
      container.style.display = 'none'
      setConditon(true)
    }
  }

  const startChangeBoxContainer = () => {
    const stopBoxContainer = document.getElementById('stopBoxContainer')
    const defaltBoxContainer = document.getElementById('defaultBoxContain')
    const startBoxContainer = document.getElementById('startBoxContainer')
    defaltBoxContainer.style.display = 'none'
    startBoxContainer.style.display = ''
    stopBoxContainer.style.display = 'none'
  }

  const stopChangeBoxContainer = () => {
    const startBoxContainer = document.getElementById('startBoxContainer')
    const stopBoxContainer = document.getElementById('stopBoxContainer')
    startBoxContainer.style.display = 'none'
    stopBoxContainer.style.display = ''
  }
  return (
    <div>
      <div>
        <div id="checkNum">
          <input type='number' pattern='\d*' placeholder="횟수선택" className="ChooseNum" min='1' max='25' onChange={changeNum} value={num} style={{ width: '5rem' }} />
          <button className="identifyBtn" onClick={() => { checkSubmit(), visibleStartBtn() }} style={{ marginLeft: '6px', marginBottom: '3rem' }}>확인</button> <br />
        </div>

        <div id="timerBox" style={{ display: 'none' }}>
          <div className="latestNum">남은 세트 수 : {num}회</div>

          <div id="defaultBoxContain">
            <div className='start'>START !</div>
            <div className='tag'>시작 버튼을 누르세요.</div>
          </div>

          <div id="startBoxContainer" style={{ display: 'none'}}>
            <div style={{ fontSize: '8vw', marginTop: '1rem', color: '#03e3fc' }}>{num}세트 시작!</div>
            <div style={{ marginTop: '0.5rem', fontSize: '3vw' }}>세트가 끝나면 종료 버튼을 누르세요.</div>
          </div>

          <div id="stopBoxContainer" style={{ display: 'none'}}>
            <div style={{fontSize: '8vw', marginTop: '1rem', color: '#fc6203' }}>{num+1}세트 종료</div>
            <div style={{ marginTop: '0.5rem', fontSize: '3vw' }}>적당량의 휴식을 취하고 시작 버튼을 누르세요.</div>
          </div>

          <button className='startBtn' onClick={startChangeBoxContainer}>시작</button>
          <button className='stopBtn' style={{ marginLeft: '1rem' }} onClick={() => { minusNum(), stopChangeBoxContainer()}}>종료</button>
        </div>
      </div>
      {renderCondition}
    </div>
  )
}