import { ArrowNext, ArrowPrev } from "@components/icons";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import "swiper/swiper-bundle.css";
// dummy data
const data = [
  {
    id: 1,
    title: "banner:promotion-slide-one",
    bannerUrl: "/promotion/babygirl.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,657.00"
  },
  {
    id: 2,
    title: "banner:promotion-slide-two",
    bannerUrl: "/promotion/baba.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,657.00"
  },
  {
    id: 3,
    title: "banner:promotion-slide-three",
    bannerUrl: "/promotion/bap.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,854.00"
  },
  {
    id: 4,
    title: "banner:promotion-slide-four",
    bannerUrl: "/promotion/Adam-Dress.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,200.00"
  },
  {
    id: 5,
    title: "banner:promotion-slide-five",
    bannerUrl: "/promotion/bap.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 2,500.00"
  },
  {
    id: 6,
    title: "banner:promotion-slide-six",
    bannerUrl: "/promotion/babygirl.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 2000.00"
  },
  {
    id: 7,
    title: "banner:promotion-slide-seven",
    bannerUrl: "/promotion/baba.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 1,657.00"
  },
];

const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 4,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};
SwiperCore.use([Navigation]);

export default function PromotionSlider() {
  const { t } = useTranslation();
  return (
    
    <div style={{backgroundImage:`url("https://mcdn.wallpapersafari.com/medium/30/19/iX7L0x.png")` }}>
    <div className="px-6 py-5 md:px-8 xl:px-12 md:py-10 border-t border-border-200">
    <h2 className="decorated text-2xl mb-8"><span><strong>OUR BESTSELLING PRODUCTS FOR YOUR CUTE LITTLE GEM</strong></span></h2>
      <div className="relative">
        <Swiper
          id="offer"
          // loop={true}
          breakpoints={offerSliderBreakpoints}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {data?.map((d) => (
            <SwiperSlide key={d.id}>
              <img
                // className="w-full h-auto"
                className="rounded-xl"
                src={d.bannerUrl}
                alt={t(d.title)}
                width="270"
                height="200"
              />
                  <p className="mt-5 ml-2">{d.caption}<br></br>for Baby boy</p>
                  <p className=" ml-2" ><strong>{d.price}</strong></p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-blue hover:text-light hover:text-heading"
          role="button"
        >
          <span className="sr-only">{t("common:text-previous")}</span>
          <ArrowPrev width={18} height={18} />
        </div>
        <div
          className="next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-blue hover:text-light hover:text-heading"
          role="button"
        >
          <span className="sr-only">{t("common:text-next")}</span>
          <ArrowNext width={18} height={18} />
        </div>
      </div>
    </div>
    </div>
  );
}
