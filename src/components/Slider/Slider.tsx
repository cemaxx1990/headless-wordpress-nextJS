import { FC } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from './Slider.styles';

import { Maybe, MediaItem } from '../../api-schema';

import { replaceImgSrcPath } from '@/helpers';

type SliderProps = {
  images?: Maybe<MediaItem>[] | null;
};

export const Slider: FC<SliderProps> = ({ images }) => (
  // FIXME: Autoplay is not working
  <Swiper autoplay modules={[Autoplay, Navigation, Pagination]} navigation pagination>
    <>
      {images && images.length
        ? images.map((image, idx: number) =>
            image ? <SwiperSlide image={replaceImgSrcPath(image.sourceUrl || undefined, process.env.NEXT_PUBLIC_MEDIA_URL)} key={idx}></SwiperSlide> : null,
          )
        : null}
    </>
  </Swiper>
);
