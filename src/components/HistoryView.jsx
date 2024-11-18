import "./HistoryView.css";

function HistoryView(props) {
  const answers = JSON.parse(localStorage.getItem("diary") || "{}");

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
            props.setView("main");
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(answers).map(([date, content]) => (
        <div key={date} className="diary-item">
          <div className="diary-date">{date}일</div>
          <div>{content}</div>
        </div>
      ))}
    </>
  );
}
export default HistoryView;
