import React, { useState } from "react";
import { useRouter } from "next/router";
import $ from "jquery";

export default function Home() {
  const router = useRouter();
  
  const changePage = () => {
    const page = $("#select option:selected").val()
    router.push("/workout/" + page)
  }
  return (
    <div className="container">
      <div className="box">
        <p>종목</p>
        <select id='select'>
          <option value="ArmPullDown">Arm Pull-down</option>
          <option value="BarbellCurl">Barbell Curl</option>
          <option value="BenchPress">Bench Press</option>
          <option value="BarbellRow">Barbell Row</option>
          <option value="Deadlift">Deadlift</option>
          <option value="LegPress">Leg Press</option>
          <option value="Squat">Squat</option>
        </select>
        <br />
        <button onClick={changePage}>CONFIRM</button>
      </div>     
    </div>
  );
}