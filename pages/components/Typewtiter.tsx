import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { useRouter } from 'next/router';

export default function Typewtiter() {
  const router = useRouter();
  const clickMainBtn = () => {
    router.push('/')
  }
  return (
    <>
      <TypeWriterEffect
        textStyle={{
          marginTop: '20rem',
          marginBottom: '5rem',
          textAlign: 'center',
          fontFamily: 'bold',
          color: '#f00',
          fontWeight: 500,
          fontSize: '7vw',
        }}
        startDelay={1000}
        cursorColor="#f00"
        multiText={[
          '모든 세트가 종료되었습니다 !',
          '수고하셨습니다 !'
        ]}
        multiTextDelay={500}
        typeSpeed={100}
        id='Type'
      />
      <button className="mainBtn" onClick={clickMainBtn}>MAIN</button>
    </>
  )
}
