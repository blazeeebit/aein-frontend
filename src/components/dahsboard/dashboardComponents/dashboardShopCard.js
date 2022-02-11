const AddNewShopCard = (props) => {
  return (
            <div className="shopCardContEmpty h-100" onClick={props.openCloseModal}>
              <button className="addShopBtn">+</button>
            </div>
  )
}

export default AddNewShopCard;