import Image from "next/image";
import Link from "next/link";
import getCardImg from "../../../../assets/getCard_img.png";
import getCardGooglePlayImg from "../../../../assets/getCard-google-play.png";
import getCardAppleStoreImg from "../../../../assets/getCard-apple-store.png";

export default function GetCard() {
  return (
    <section className="mt-[60px] md:mt-[100px] lg:mt-[215px]">
      <div className="inner_section flex-col md:flex-row flex items-center justify-between gap-10 md:gap-3">
        <div className="flex mx-auto max-w-[584px] md:w-[584px] flex-col items-center justify-center md:items-start md:justify-start gap-5">
          <h5 className={`flex items-center justify-center gap-2.5 rounded-[30px] border bg-slate-100 px-5 py-2.5 text-base font-normal text-stone-950`}>
            Get card
          </h5>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-5 md:gap-10">
            <h3 className={`text-[30px] md:text-[48px] text-center md:text-left font-semibold text-stone-950`}>
              Get your charge card now for free
            </h3>
            <p className={`text-lg md:text-xl text-center md:text-left text-[#333333]`}>
              Seize financial freedom effortlessly. Secure your charge card now
              – it&apos;s free, it&apos;s fast, and it&apos;s the key to
              unlocking a smarter way to manage your money.
            </p>
            <div className="flex w-full items-center justify-center md:justify-start gap-3">
              <Link href="">
                <Image
                  src={getCardGooglePlayImg}
                  width={5000}
                  height={5000}
                  className="h-11 w-[148.50px]"
                  alt="google play"
                />
              </Link>
              <Link href="">
                <Image
                  src={getCardAppleStoreImg}
                  width={5000}
                  height={5000}
                  className="h-11 w-[132px]"
                  alt="app store"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[645px] md:w-[645px]">
          <Image
            src={getCardImg}
            width={5000}
            height={5000}
            className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[650px] relative rounded-[20px]"
            alt="features image"
          />
        </div>
      </div>
    </section>
  );
}
