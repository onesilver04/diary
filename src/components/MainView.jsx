import "./MainView.css";

function MainView(props) {
  // mainview의 오늘날짜 가져오기
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  return (
    <>
      <div className="header">
        <div>{formattedDate}</div>
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
      <div className="question">(질문)</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

export default MainView;
