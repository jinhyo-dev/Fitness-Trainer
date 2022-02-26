import React from 'react'
import Type from '../components/Type'
export default function Deadlift() {
  return (
    <div>
      <div className="Deadlift" id='container'>
        <h1>Barbell Row</h1>
        <img src='/images/Deadlift.png' alt="Deadlift" />
        <div className="explain">
          1. 발을 골반 너비만큼 벌린다. <br />
          2. 덤벨 또는 봉을 쥔 손을 어깨보다 조금 좁게 잡는다. <br />
          3. 그 상태로 허리가 말리지 않도록 내려간다. <br /> <br />
        </div>
        <div className="caution">
          호흡법 : 내려갈 때 숨을 마시고, 다 올라온 후 숨을 내쉰다. <br />
          주의사항 : 허리가 말리면 허리 디스크나 허리 염좌 등의 허리 질환을 유발할 수 있으니 조심해야 된다. <br />
        </div>
        <p>15회씩 3~5세트</p>
      </div>
      <Type />
    </div>
  )
}