import Inputs from "./inputs"
import StoreImg from "../../assets/store.jpg";
import { SubmitStore } from "../../states/states";

const ModalForm = (props) => {

    const {setStoreData, StoreData, createStore, isLoading, error} = SubmitStore();

  return (
    <form className={`col-6 bg-light h-50 w-50 modalform d-flex justify-content-center align-items-center ${props.ModalAnimation}`}>
        <div className="col-8 h-75 d-flex flex-column align-items-start justify-content-center formInputCont">
            <label className="formLabel mb-2">Choose a name</label>
            <Inputs placeholder="Name your new store" change={(e) => setStoreData({...StoreData, name : e.target.value})} nameVal={StoreData.name}/>
            <label className="formLabel mb-2">Pick your category</label>
            <select className="selectionList col-9 shadow-lg mb-5" onChange={(e) => setStoreData({...StoreData, storeType : e.target.value})}>
                <option value="" selected disabled hidden>Choose here</option>
                <option value="Clothing" className="selectOption">Clothing</option>
                <option value="Shoes" className="selectOption">Shoes</option>
                <option value="Technology" className="selectOption">Technology</option>
                <option value="Restaurant" className="selectOption">Restaurant</option>
                <option value="Furniture" className="selectOption">Furniture</option>
            </select>
            <div className="col-9 d-flex justify-content-between align-items-center">
            <button className="createBtn d-flex justify-content-center align-items-center" onClick={createStore}>
            {!isLoading ? (
                    <>Create store</>
                    ) : (
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    )}
            </button>
            <button className="btn btn-danger" onClick={props.closeModal}>Close</button>
            </div>
            <div className="col-12 mt-3 errorText">{error}</div>
        </div>
        <div className="formImage col-4 bg-dark h-100 d-flex justify-content-center">
            <img src={StoreImg} alt="" />
        </div>
    </form>
  )
}

export default ModalForm