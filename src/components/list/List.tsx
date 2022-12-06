import React from 'react';
import * as S from './List.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useNavigate} from 'react-router-dom';
import NoData from '../noData/NoData';
import {column} from '../../models';


import 'swiper/css';
import 'swiper/css/scrollbar';

type props = {
  list: column[],
}

const List = ({list}: props) => {
  const navigate = useNavigate();
  
  return (
    <S.Container>
      {list ?
      <Swiper
        slidesPerView = {1.3}
        spaceBetween = {15}
        style={{
          display:'flex',
          alignItems:'stretch'
        }}
        
        breakpoints = {{
          576: {
            slidesPerView: 2.5,
          },
          980: {
            slidesPerView: 4,
          }
        }}
      > 
        {list.map((item,index) => (
          <SwiperSlide  key={index}>
            <S.BoardColumn  name={item.name} tasks={item.tasks}/> 
          </SwiperSlide>  
        ))}
        <SwiperSlide
          style={{
            display:'flex',
            alignItems:'stretch',
          }}
        >
          <S.NewColumn>
            <S.Button onClick={()=>{
              navigate(`new`)
            }}>+ New Column</S.Button>
          </S.NewColumn>
        </SwiperSlide>
      </Swiper>
      : 
      <NoData click={()=>{
          navigate('new')
      }}/> 
      }
    </S.Container>
  )
}

export default List