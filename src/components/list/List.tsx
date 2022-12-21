import React from 'react';
import * as S from './List.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, useParams } from 'react-router-dom';
import NoData from '../noData/NoData';
import { column } from '../../models';

import 'swiper/css';
import 'swiper/css/scrollbar';

type props = {
  list: column[];
};

const List = ({ list }: props) => {
  const { page } = useParams();
  const navigate = useNavigate();
  return (
    <S.Container>
      {list?.length > 0 ? (
        <Swiper
          style={{ height: '100%' }}
          slidesPerView={1.3}
          spaceBetween={15}
          breakpoints={{
            576: {
              slidesPerView: 2.5,
            },
            980: {
              slidesPerView: 4,
            },
          }}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <S.BoardColumn name={item.name} sequence={index} tasks={item.tasks} />
            </SwiperSlide>
          ))}
          <SwiperSlide
            style={{
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <S.NewColumn>
              <S.Button
                onClick={() => {
                  navigate(`/${page}/edit`);
                }}
              >
                + New Column
              </S.Button>
            </S.NewColumn>
          </SwiperSlide>
        </Swiper>
      ) : (
        <NoData
          click={() => {
            navigate('new');
          }}
        />
      )}
    </S.Container>
  );
};

export default List;
