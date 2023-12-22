import "./task.css";
export function Task({ title, currentHours, lastHour, colors, backgroundImg }) {
  const Imgbackground = `url(${backgroundImg})`;
  const style = {
    background: `top -4px right 20px ${Imgbackground}  no-repeat`,
    backgroundColor: colors,
  };
  return (
    <div className="Task" style={style}>
      <div className="content">
        <div className="title">{title}</div>
        <div className="current-time">{currentHours} hrs</div>
        <div className="img-menu">
          <img src="./public/images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="last-time">last weeks - {lastHour} hrs </div>
      </div>
    </div>
  );
}
