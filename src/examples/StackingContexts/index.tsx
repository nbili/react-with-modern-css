import "./stackingcontext.css";

function Render() {
  return (
    <div className="stacking-contexts">
      <header>header ...</header>
      <div className="context-wrapper">
        <div className="box1">box1</div>
        <div className="box2">
          <div className="box2-1">box2-1</div>
          <div>box2-2</div>
          <div>box2-3</div>
        </div>
      </div>
    </div>
  );
}

export { Render };
