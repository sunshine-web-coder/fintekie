import appStoreImg from "../../assets/appstore.png";
import googlePlayImg from "../../assets/google-play.png";
import bannerImg from "../../assets/banner_img.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section className="mt-[100px] md:mt-[100px]">
      <div className="inner_section">
        <div className="mb-[35px] md:mb-[50px]">
          <h2 className={`mx-auto max-w-[889px] text-center text-[48px] md:text-[64px] font-semibold leading-[58px] md:leading-[78px] text-stone-950`}>
            Charge card made to keep up with you.
          </h2>
          <p className={`mx-auto mt-[20px] max-w-[586px] text-center text-[18px] md:text-xl font-normal text-stone-950`}>
            Enjoy an exclusive range of benefits and privileges designed to let
            you get the most out of life
          </p>
          <div className="mt-[30px] flex items-center justify-center gap-3">
            <Link href="">
              <Image
                src={googlePlayImg}
                width={5000}
                height={5000}
                className="h-11 w-[148.50px]"
                alt="google play"
              />
            </Link>
            <Link href="">
              <Image
                src={appStoreImg}
                width={5000}
                height={5000}
                className="h-11 w-[132px]"
                alt="app store"
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={bannerImg}
            width="1312"
            height="675"
            className="relative sm:h-[500px] md:h-[675px] w-[1312px] rounded-[10px]"
            alt="banner img"
          />
        </div>
      </div>
    </section>
  );
}
