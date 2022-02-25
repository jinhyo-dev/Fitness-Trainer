import React, { useState } from 'react'

export default function Squat() {
  
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

  const changeNum = (e:any) => {
    setNum(e.target.value)
  }
  
  return (
    <div>
      <div className="Squat">
        <h1>Squat</h1>
        <img src="/images/Squat.png" alt="Squat" />
        <div className="explain">
          1. 발을 어깨너비만큼 벌리고 팔을 앞으로 뻗는다. <br />
          2. 허리를 구부리지 않고 곧게 펴 무릎을 굽혀 허벅지와 바닥이 수평이 될 때까지 앉는다. <br />
          3. 허리를 곧게 유지한 채로 엉덩이에 힘을 주며 발바닥으로 땅을 민다는 느낌으로 일어난다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 내려갈 때 숨을 마시고, 일어설 때 숨을 내쉰다. < br />
          주의사항 : 자신의 다리 상태에 따라 운동 횟수를 조절하며, 앉을 때 무릎이 발가락보다 앞으로 나가지 않도록 한다.
        </div>
        <p>100개 기준으로 10회씩 10세트<br/>또는 25회씩 4세트</p>

        <div id="checkNum">  
          <input type='number' placeholder="횟수선택" className="ChooseNum" min='1' max='25' onChange={changeNum} value={num}/>
          <button className="identifyBtn" onClick={() => {checkSubmit(), visibleStartBtn()}} style={{marginLeft: '6px'}}>확인</button> <br />
        </div>

        <div id="timerBox" style={{display: 'none'}}>
          <div className="latestNum">남은 세트 수 : {num}회</div>  
          <button>시작</button>
          <button style={{marginLeft: '1.5rem'}}>종료</button>
        </div>
      
      </div>
    </div>
  )
}