import React from 'react'
import Type from '../components/Type'
export default function ArmPullDown() {
  return (
    <div>
      <div className="ArmPullDown" id='container'>
        <h1>Arm Pull Down</h1>
        <img src='/images/ArmPullDown.png' alt="ArmPullDown" />
        <div className="explain">
          1. 다리를 어깨너비만큼 벌린 뒤 무릎을 굽힌다. <br />
          2. 그립은 팔꿈치를 살짝 굽힌 상태로 자신의 어깨너비만큼 잡는다. <br />
          3. 허리를 곧게 펴고 상체를 45도로 기울인다. <br />
          4. 반원을 그리듯 바를 허벅지 쪽으로 끌어내린다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 끌어내릴 때 숨을 내쉬고, 원 위치로 돌아갈 때 숨을 마신다. < br />
          주의사항 : 승모근에는 힘이 들어가지 않도록 하고 상체가 앞, 뒤 또는 위아래로 흔들리지 않고 고정시킨다.
        </div>
        <p>12-15회씩 3-5세트</p>
      </div>
      <Type />
    </div>
  )
}