export const Buttons = (props) => {
  return (
    <button
      className="button-auth mt-1 d-flex justify-content-start align-items-center"
      type={props.btnType}
    >
      {props.btnText}
    </button>
  )
}

export const SocialButtons = (props) => {
  return (
    <div
      className={`${props.typeClass} d-flex justify-content-center align-items-center`}
      onClick={props.function}
    >
      <img src={props.logo} alt="" />
    </div>
  )
}
