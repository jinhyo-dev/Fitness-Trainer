import React from 'react'
import Type from '../components/Type'
export default function LegPress() {
  return (
    <div>
      <div className="LegPress" id='container'>
        <h1>Leg Press</h1>
        <img src='/images/LegPress.png' alt="LegPress" />
        <div className="explain">
          1. 엉덩이와 허리는 기계와 떨어지지 않도록 한다. <br />
          2. 어깨너비만큼 양발과 무릎을 벌린다. <br />
          3. 무릎이 90도가 되게 올려놓는다. <br />
          4. 발뒤꿈치로 발판을 민다는 느낌으로 밀어준다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 밀면서 숨을 내쉬고, 돌아올 때 숨을 마신다. < br />
          주의사항 : 엉덩이와 허리가 기계에 붙이지 않고 할 시 허리에 무리가 가게 된다.
        </div>
        <p>12~15회씩 3~5세트</p>
      </div>
      <Type />
    </div>
  )
}
