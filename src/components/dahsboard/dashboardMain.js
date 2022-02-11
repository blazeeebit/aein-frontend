import { ShowUserInfo } from "../../states/states";
import DashboardShops from "./dashboardComponents/dashboardShops";
import { shops } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const DashboardMain = (props) => {

    const {capsUsername} = ShowUserInfo();

  return (
    <div className="col-7 main-section">
        <div className="mainSecGridItem">
            <div className="container-fluid h-100">
                    <div className="col-12 h-100 mainSecText">Hi {capsUsername}</div>
            </div>
        </div>
        <div className="mainSecGridItem d-flex align-items-center">
            <div className="container-fluid cardCont h-75">
                    <h5 className="subHeadings">Your Shops</h5>
                    <DashboardShops eachShop={shops} ModelFunc={props.openModal}/>
            </div>
        </div>
        <div className="mainSecGridItem">
            item
        </div>
        <div className="mainSecGridItem">
            item
        </div>
    </div>
  )
}

export default DashboardMain;