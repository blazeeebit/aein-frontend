import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Girl from '../../../assets/girls.jpg'
import { OrderData } from '../../data';
import { GetOrders } from '../../../states/states';


const DashboardOrder = () => {

    const {isLoading} = GetOrders();

    const PreviewOrders = () => {
        return (
            <div className="orderCardCont">
                <Swiper
                paceBetween={10} 
                slidesPerView={4}
                className="h-100"
                >
                    {isLoading ? (
                        <SwiperSlide className='noOrders d-flex justify-content-center align-items-center'>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </SwiperSlide>
                    ) : (
                        OrderData.length === 0 ? (
                            <SwiperSlide className='noOrders d-flex justify-content-center align-items-center text-center'>
                                <h4>
                                    You Have No Current Orders
                                </h4>
                            </SwiperSlide>
                        ) : (
                            OrderData.map((order,i) => (
                                <SwiperSlide key={order.id}>
                            <div className="cardCont position-relative eachSlide">
                                <div className="circle position-absolute"></div>
                                <div className="cardItem cardInfo">
                                    <div className="info d-flex align-items-center">
                                        <h5 className="orderSubHeadings">
                                            {order.name}
                                        </h5>
                                    </div>
                                    <div className="info">
                                        <div className="orderPrice">
                                            <h2>
                                            {order.price}$
                                            </h2>
                                        </div>
                                        <div className="orderDateMade">
                                            <h6>
                                            Placed <span>{order.dataMade}</span>
                                            </h6>                                  
                                        </div>
                                    </div>
                                </div>
                                <div className="cardItem d-flex justify-content-center align-items-start">
                                    <div className="profileOrder d-flex justify-content-center align-items-center">
                                        {order.image === '' ? (
                                            <h1 className='usernameHeading'>
                                                {order.name.substring(0,2).toUpperCase()}
                                            </h1>
                                        ) : (
                                            <img src={Girl} alt="" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            ))
                        )
                        
                    )}
                </Swiper>
            </div>
        )
    }

  return {
    PreviewOrders
  }
}

export default DashboardOrder