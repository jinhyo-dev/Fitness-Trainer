import React from 'react'

export default function BenchPress() {
  return (
    <div>
      <div className="BenchPress">
        <h1>Bench Press</h1>
        <img src="/images/BenchPress.png" alt="BenchPress" />
        <div className="explain">
          1. 팔을 직선으로 곧게 뻗어 바벨을 쭉 올린다. <br />
          2. 궤도가 변하지 않도록 한다. <br />
          3. 팔을 뒤로 굽혀 가슴을 향해 바벨을 끌어당긴다. <br /><br />
        </div>
        <div className="caution">
          호흡법 : 올릴 때 입으로 숨을 길게 내쉬고, 내릴 때는 코로 길게 숨을 마신다. < br />
          주의사항 : 손목이 뒤로 또는 옆으로 꺾이지 않도록 하고 몸통에 바짝 붙이지 않고 가슴이 닿기 직전까지 내린다.
        </div>
        <p>10-15회씩 3-5세트</p>
      </div>
    </div>
  )
}
