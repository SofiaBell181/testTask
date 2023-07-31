import { useEffect, useState } from 'react';
import './Reviews.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


interface IReview<T> {
  id: number,
  name : string,
  image: T,
  city: string,
  text : string
}

interface ISliderProps {
  reviews: IReview<React.VFC<React.SVGProps<SVGSVGElement>>>[]
}


export const Reviews = ({ reviews }: ISliderProps) => {
  const [width, setWidth] = useState<number>(null)

  useEffect(() => {
    const handeResize = () => {
      setWidth(window.innerWidth);
    }
    handeResize();
    window.addEventListener('resize', handeResize);

    return () => {
      window.removeEventListener('resize', handeResize)
    }
  },[width])

  return (
    <div className='container container-reviews'>
      <div className='review-header' >
        <h2>Отзывы</h2>
      </div>   
      <div className='block-swiper'>
        <Swiper pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          navigation
          slidesPerView={width < 1200 ? 2 : width < 400 ? 1 : 3 }
          spaceBetween={0}
          >
          
              <div>
                {reviews.map(item => (
                  <SwiperSlide key={item.id}>
                    <div className='slide'>
                      <div className='person-info'>
                        <div>
                          {<item.image/>}
                        </div>
                        <div className='person'>
                          <p className='name'>{item.name}</p>
                          <p className='city'>{item.city}</p>
                        </div>
                      </div>
                      <div>
                        <p className='text'>{item.text}</p>
                      </div>
                    </div>
                    </SwiperSlide>
                ))}
              </div>
           
       
        </Swiper>
      </div>
    

    </div>
  )
}

