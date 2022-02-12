const Inputs = (props) => {

  return (
    <input
      type="text"
      className="formInput col-9 shadow-lg mb-3"
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.nameVal}
    />
  )
}

export default Inputs
