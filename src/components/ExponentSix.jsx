const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁶</p>
    <p className="exponent-result">{props.count} * {props.count} * 6 = <span className="total">{props.count * props.count * 6}</span></p>
  </div>
);

export default ExponentSix;