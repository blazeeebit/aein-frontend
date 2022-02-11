import { Swiper, SwiperSlide } from 'swiper/react'
import { AvgFunction, RoundFunction } from '../../../functions/functions'
import Star from '../../../assets/star.png'
import { SetLoader } from '../../../states/states'
import { useEffect } from 'react'

// Import Swiper styles
import 'swiper/css'

import AddNewShopCard from './dashboardShopCard'

const DashboardShops = (props) => {
  const shops = props.eachShop

  const {isLoading, setIsLoading} = SetLoader();

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 5000)
  },[])

  return (
    <Swiper className="h-100" spaceBetween={10} slidesPerView={3}>
      {shops.length === 0 ? (
        <>
        <SwiperSlide className="slide">
          <AddNewShopCard openCloseModal={props.ModelFunc}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
              {!isLoading ? (
                   <div className="shopCardContCreate h-100">
                   You have no stores
               </div>
              ) : (
                <div className="shopCardContCreate h-100">
                <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
              )}
          </SwiperSlide>
        </>
      ) : (
        <>
         <SwiperSlide className="slide">
         <AddNewShopCard openCloseModal={props.ModelFunc}/>
          </SwiperSlide>
          {!isLoading ? (shops.map((shop) => (
            <SwiperSlide key={shop.id}>
              <div className="shopCardCont h-100">
                <div className="shopCardContItem header">
                  {shop.name.length > 12 ? (
                    <h3 className="cardTitleSmaller">{shop.name}</h3>
                  ) : (
                    <h3 className="cardTitle">{shop.name}</h3>
                  )}
                </div>
                <div className="shopCardContItem body">
                  <div className="bodyItem type">{shop.type}</div>
                  <div className="bodyItem d-flex">
                      {shop.ratings.length === 0 ? (
                          <div className="noRating">
                              Store not rated yet
                        </div>
                      )
                       : (
                          <>
                        {shop.stars
                            .filter(
                              (item, index) => item <= RoundFunction(shop.ratings),
                            )
                            .map((star) => (
                              <img src={Star} key={star} className="starRating" alt="star" />
                            ))}
                          <div className="ratingCont">
                            {AvgFunction(shop.ratings)}
                          </div>
                          </>
                       )}
                  </div>
                  <div className="bodyItem productNum">{shop.products}</div>
                </div>
                <div className="shopCardContItem footer bg-light"></div>
              </div>
            </SwiperSlide>
          ))) : (
            <SwiperSlide className="slide">
            
              <div className="shopCardContCreate h-100">
              <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
          </div>
        </SwiperSlide>
          )}
        </>
      )}
    </Swiper>
  )
}

export default DashboardShops
