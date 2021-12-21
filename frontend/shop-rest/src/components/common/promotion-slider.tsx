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
    bannerUrl: "/promotion/offer-1.png",
  },
  {
    id: 2,
    title: "banner:promotion-slide-two",
    bannerUrl: "/promotion/offer-2.png",
  },
  {
    id: 3,
    title: "banner:promotion-slide-three",
    bannerUrl: "/promotion/offer-3.png",
  },
  {
    id: 4,
    title: "banner:promotion-slide-four",
    bannerUrl: "/promotion/offer-4.png",
  },
  {
    id: 5,
    title: "banner:promotion-slide-five",
    bannerUrl: "/promotion/offer-5.png",
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
    slidesPerView: 3,
    spaceBetween: 16,
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
    <div className="bg-light-100 min-h-full pt-6 pb-8 px-8 lg:p-24 bg section-bg fill bg-fill bg-loaded">
    <div style={{flexDirection: 'row'}}>
    <h2 className="decorated text-2xl mb-8"><span><strong>OUR BESTSELLING PRODUCTS FOR YOUR CUTE LITTLE GEM</strong></span></h2>

    </div>
        <div className="grid lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-0">
              <div>
              <img
                    className="rounded-xl"
                    src="/bap.png"
                    alt={t("404-heading")}
                    width={250}
                    height={250}
                  />
                  <p className="mt-5 ml-2">Evah – Pink Cotton Gown Set <br></br>for Baby Girl</p>
                  <p className=" ml-2" ><strong>₹ 3,657.00</strong></p>
              </div>
              <div>
              <img
                    className="rounded-xl"
                    src="/babygirl.jpg"
                    alt={t("404-heading")}
                    width={250}
                    height={250}
                  />
                        <p className="mt-5 ml-2">Evah – Pink Cotton Gown Set <br></br>for Baby Girl</p>
                  <p className=" ml-2" ><strong>₹ 3,657.00</strong></p>
              </div>
              <div>
              <img
                    className="rounded-xl"
                    src="/bap.png"
                    alt={t("404-heading")}
                    width={250}
                    height={250}
                  />
                        <p className="mt-5 ml-2">Evah – Pink Cotton Gown Set <br></br>for Baby Girl</p>
                  <p className=" ml-2" ><strong>₹ 3,657.00</strong></p>
              </div>
              <div>
              <img
                    className="rounded-xl"
                    src="/bap.png"
                    alt={t("404-heading")}
                    width={250}
                    height={250}
                  />
                        <p className="mt-5 ml-2">Evah – Pink Cotton Gown Set <br></br>for Baby Girl</p>
                  <p className=" ml-2" ><strong>₹ 3,657.00</strong></p>
              </div>
    </div>
  </div>
  </div>
    // <div className="px-6 py-5 md:px-8 xl:px-12 md:py-10 border-t border-border-200">
    //   <div className="relative">
    //     <Swiper
    //       id="offer"
    //       // loop={true}
    //       breakpoints={offerSliderBreakpoints}
    //       navigation={{
    //         nextEl: ".next",
    //         prevEl: ".prev",
    //       }}
    //     >
    //       {data?.map((d) => (
    //         <SwiperSlide key={d.id}>
    //           <img
    //             className="w-full h-auto"
    //             src={d.bannerUrl}
    //             alt={t(d.title)}
    //             width="430"
    //             height="200"
    //           />
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //     <div
    //       className="prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent"
    //       role="button"
    //     >
    //       <span className="sr-only">{t("common:text-previous")}</span>
    //       <ArrowPrev width={18} height={18} />
    //     </div>
    //     <div
    //       className="next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent"
    //       role="button"
    //     >
    //       <span className="sr-only">{t("common:text-next")}</span>
    //       <ArrowNext width={18} height={18} />
    //     </div>
    //   </div>
    // </div>
  );
}
