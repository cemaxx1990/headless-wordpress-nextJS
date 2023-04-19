import styled from 'styled-components';
import { Swiper as SwiperBase, SwiperSlide as SwiperSlideBase } from 'swiper/react';

import { MediaMediumAndAbove, Colors } from '../../theme';

import 'swiper/css';
import 'swiper/element/css/navigation';
import 'swiper/element/css/pagination';

export const Swiper = styled(SwiperBase)`
  height: 200px;
  ${MediaMediumAndAbove} {
    height: 700px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${Colors.black};
  }
  .swiper-pagination-bullet-active {
    background: ${Colors.black};
  }
`;

export const SwiperSlide = styled(SwiperSlideBase)<{ image?: string }>`
  height: 100%;
  background: url(${({ image }) => image || ''});
  background-position: center;
  background-size: cover;
`;
