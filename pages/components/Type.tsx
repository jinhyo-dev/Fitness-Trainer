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

  const minusNum = (e: any) => {
    setNum(num - 1)
    if (num == 1) {
      const container = document.getElementById('container')
      const box = document.getElementById('timerBox')
      box.style.display = 'none'
      container.style.display = 'none'
      setConditon(true)
    }
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
          <div className='start'>START !</div>
          <div className='tag'>세트가 끝나시면 종료 버튼을 누르세요</div>
          <button className='startBtn'>시작</button>
          <button className='stopBtn' style={{ marginLeft: '1rem' }} onClick={minusNum}>종료</button>
        </div>
      </div>
      {renderCondition}
    </div>
  )
}