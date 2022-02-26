import React from 'react'
import Type from '../components/Type'
export default function BarbellCurl() {
  return (
    <div>
      <div className="BarbellCurl" id='container'>
        <h1>Leg Press</h1>
        <img src="/images/BarbellCurl.png" alt="BarbellCurl" />
        <div className="explain">
          1. 팔을 어깨너비만큼 벌리고 바는 5~10도 굽은 상태로, 언더 그립으로 잡는다. <br />
          2. 팔은 옆구리와 살짝 떨어질 수 있게 위치하여 고정시킨다. <br />
          3. 이 상태에서 큰 반원을 그리며 들어 올린다. <br />
          4. 그리고 저항을 느끼면서 다시 펴준다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 올릴 때 숨을 내쉬고, 내릴 때 숨을 마신다. < br />
          주의사항 : 몸의 반동을 이용해 바벨을 올리면 팔에 무리가 올 수 있다.
        </div>
        <p>12-15회씩 3-4세트</p>
      </div>
      <Type />
    </div>
  )
}