import "./MainView.css";
import { useEffect, useState } from "react";

function MainView(props) {
  // mainview의 오늘날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const answers = JSON.parse(localStorage.getItem("diary") || "{}");
  // localStorage에서 데이터를 가져와 파싱 후 object로 리턴
  const [input, setInput] = useState(answers[day]);

  // 질문 가져오기
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // 객체로 질문 받기
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div>
          {year}년 {month}월 {day}일
        </div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // history 화면으로 전환
              props.setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">{questions[day]}</div>
      <div className="content">
        <textarea
          // 입력값을 렌더링
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            // 새로고침 해도 값이 남아 있게
            // 다른 날짜의 대답도 저장
            localStorage.setItem(
              "diary",
              JSON.stringify({ ...answers, [day]: value })
            );
          }}
        />
      </div>
    </>
  );
}

export default MainView;
