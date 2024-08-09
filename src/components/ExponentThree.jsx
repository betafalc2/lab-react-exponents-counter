const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}³</p>
    <p className="exponent-result">{props.count} * {props.count} * 3 = <span className="total">{props.count * props.count * 3}</span></p>
  </div>
);

export default ExponentThree;