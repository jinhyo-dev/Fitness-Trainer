import React from 'react'

export default function BarbellRow() {
  return (
    <div>
      <div className="BarbellRow">
        <h1>Deadlift</h1>
        <img src="/images/BarbellRow.png" alt="BarbellRow" />
        <div className="explain">
          1. 바벨을 잡을 때 어깨보다 넓은 간격으로 오버 그립 한다. <br />
          2. 다리를 어깨너비만큼 벌린 후에 무릎을 살짝 굽힌다. <br />
          3. 그리고 상체를 45도 각도로 숙이면서 엉덩이를 뒤로 뺀다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 들어 올릴 때 숨을 내쉬고, 내릴 때 숨을 마신다. <br />
          주의사항 : 자기와 안 맞는 무거운 무게를 사용할 경우 자세가 무너져 척추에 부담이 될 수 있다.
        </div>
        <p>8-15회씩 3-4세트</p>
      </div>
    </div>
  )
}
