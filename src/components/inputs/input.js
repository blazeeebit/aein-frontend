const Input = (props) => {
  return <input type={props.inputType} className={`${props.fullInput} my-1`} placeholder={props.inputPlaceholder} value={props.val} onChange={props.change}/>;
};

export default Input;
