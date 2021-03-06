import Links from '../../components/typography/links';

const Nav = (props) => {

  return (
    <div className={`container-fluid auth-nav ${props.visibleClass}`}>
      <div className="closed" onClick={props.function}>
        X
      </div>
      <div className="sub-nav-cont container-fluid d-flex justify-content-between align-items-center">
      <div className="logo-cont d-flex justify-content-center align-items-center">
        Aein.
      </div>
      <div className="menu-cont d-flex justify-content-around align-items-center">
        <Links toRoute="/" linkName="Home" linkClass="menu-links" />
        <Links toRoute="/shop" linkName="Shop" linkClass="menu-links" />
        <Links toRoute="/about" linkName="About" linkClass="menu-links" />
      </div>
      <div className="auth-links d-flex justify-content-end">
        <Links toRoute={props.authType} linkName={props.linkName} linkClass="buttons" />
      </div>
      </div>
    </div>
  )
}

export default Nav
