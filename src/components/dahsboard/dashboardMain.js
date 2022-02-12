import { ShowUserInfo } from '../../states/states'
import DashboardShops from './dashboardComponents/dashboardShops'
import { shops } from '../data'
import DashboardOrder from './dashboardComponents/dashboardOrder'
import { AddActiveClass } from '../../states/states'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

const DashboardMain = (props) => {
  const { capsUsername } = ShowUserInfo()
  const { PreviewOrders } = DashboardOrder()
  const {
    activeItem,
    activeMenu,
    SetActiveClass,
    setActiveMenu,
    getProducts
  } = AddActiveClass()

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
          <DashboardShops eachShop={shops} ModelFunc={props.openModal} />
        </div>
      </div>
      <div className="mainSecGridItem orderSection">
        <div className="container-fluid">
          <h5 className="subHeadings">Your Orders</h5>
          <PreviewOrders />
        </div>
      </div>
      <div className="mainSecGridItem productsGridCont bg-dark">
        <div className="container-fluid pt-5">
          <h5 className="subHeadings">Your Products</h5>
          <div className="headerCont container-fluid p-0">
              <Swiper
              spaceBetween={10} 
              slidesPerView={4}
              >
                  {activeItem.map((item,i) => (
                      <SwiperSlide key={item._id}>
                      <div className={`selectProductStore ${i > 0 ? 'redClass' : 'whiteClass'}`}>
                          {i > 0 ? (
                              <>
                              <img src={item.image} className="" alt="" />
                              <div className="overlay"></div>
                              <h4 className="catTitle">{item.text}</h4>
                              </>
                          ) : (
                            <h4 className="catTitle">{item.text}</h4>
                          )}                  
                      </div>
                  </SwiperSlide>
                  ))}
              </Swiper>
          </div>
          <div className="container-fluid px-0 productView">
              <Swiper
              slidesPerView={3}
              spaceBetween={15}
              >
                <SwiperSlide><div className="product bg-light">+</div></SwiperSlide>
               {getProducts.map((product, i) => (
                <SwiperSlide><div className="product bg-light">{product.name}</div></SwiperSlide>
              ))}
              </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain
