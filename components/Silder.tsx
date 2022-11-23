import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../src/styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper';

const Slider = () => (
  <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }}
    speed={600}
    parallax={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
  >
    <div
      slot="container-start"
      className="parallax-bg"
      style={{
        'background-image':
          'url(https://phonoteka.org/uploads/posts/2021-07/1625137895_15-phonoteka_org-p-oboi-na-rabochii-stol-dlya-makbuka-krasivo-15.jpg)',
      }}
      data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide>
      <div className="title text-center" data-swiper-parallax="-300">
        Mon Portfolio
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
      <a class="btn btn-light btn-lg" href="/Portfolio">
        Cliquez ici
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title text-center" data-swiper-parallax="-300">
        Mon Blog
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
      <a class="btn btn-light btn-lg" href="/Blog">
        Cliquez ici
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title text-center" data-swiper-parallax="-300">
        Netflix
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
      <a class="btn btn-light btn-lg" href="/Netflix">
        Cliquez ici
      </a>
    </SwiperSlide>
  </Swiper>
);

export default Slider;
