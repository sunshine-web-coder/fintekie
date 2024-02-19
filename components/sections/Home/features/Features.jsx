import Image from "next/image";
import Link from "next/link";
import featuresImg from "../../../../assets/features_img.png"

export default function Features() {
  return (
    <section className="mt-[60px] md:mt-[100px] lg:mt-[215px]">
      <div className="inner_section border flex flex-col lg:flex-row gap-10 lg:gap-3 items-center justify-between">
        <div className="w-full lg:w-[584px] flex-col justify-start items-start gap-5 flex">
            <h5 className={`px-5 py-2.5 bg-slate-100 rounded-[30px] border justify-center items-center gap-2.5 flex text-stone-950 text-base font-normal`}>
                Features
            </h5>
            <div className="flex-col justify-start items-start gap-10 flex">
                <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
                    <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
                        <div className="self-stretch justify-center items-center flex">
                            <div className={`grow shrink basis-0 text-stone-950 text-3xl lg:text-5xl font-semibold`}>No preset spending Limit</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="w-6 h-6 p-1 bg-slate-300 rounded-3xl border justify-center items-center gap-1 flex">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="u:check">
                                <path id="Vector" d="M12.0258 4.69713C11.97 4.6409 11.9036 4.59626 11.8305 4.5658C11.7574 4.53534 11.679 4.51965 11.5998 4.51965C11.5206 4.51965 11.4421 4.53534 11.369 4.5658C11.2959 4.59626 11.2296 4.6409 11.1738 4.69713L6.70377 9.17313L4.82577 7.28913C4.76786 7.23319 4.6995 7.1892 4.62458 7.15968C4.54967 7.13016 4.46968 7.11568 4.38917 7.11707C4.30866 7.11846 4.22921 7.1357 4.15537 7.1678C4.08152 7.19989 4.01472 7.24622 3.95877 7.30413C3.90283 7.36205 3.85884 7.43041 3.82932 7.50532C3.7998 7.58024 3.78532 7.66023 3.78671 7.74074C3.78811 7.82125 3.80534 7.90069 3.83744 7.97454C3.86953 8.04839 3.91586 8.11519 3.97377 8.17113L6.27777 10.4751C6.33355 10.5314 6.39991 10.576 6.47303 10.6065C6.54614 10.6369 6.62457 10.6526 6.70377 10.6526C6.78298 10.6526 6.86141 10.6369 6.93452 10.6065C7.00764 10.576 7.074 10.5314 7.12977 10.4751L12.0258 5.57913C12.0867 5.52295 12.1353 5.45476 12.1685 5.37886C12.2018 5.30296 12.2189 5.22099 12.2189 5.13813C12.2189 5.05527 12.2018 4.97331 12.1685 4.89741C12.1353 4.82151 12.0867 4.75332 12.0258 4.69713Z" fill="#101010"/>
                                </g>
                                </svg>
                            </div>
                            <div className={`text-stone-950 text-lg lg:text-xl font-normal`}>Dynamic Spending Capacity</div>
                        </div>
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="w-6 h-6 p-1 bg-slate-300 rounded-3xl border justify-center items-center gap-1 flex">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="u:check">
                                <path id="Vector" d="M12.0258 4.69713C11.97 4.6409 11.9036 4.59626 11.8305 4.5658C11.7574 4.53534 11.679 4.51965 11.5998 4.51965C11.5206 4.51965 11.4421 4.53534 11.369 4.5658C11.2959 4.59626 11.2296 4.6409 11.1738 4.69713L6.70377 9.17313L4.82577 7.28913C4.76786 7.23319 4.6995 7.1892 4.62458 7.15968C4.54967 7.13016 4.46968 7.11568 4.38917 7.11707C4.30866 7.11846 4.22921 7.1357 4.15537 7.1678C4.08152 7.19989 4.01472 7.24622 3.95877 7.30413C3.90283 7.36205 3.85884 7.43041 3.82932 7.50532C3.7998 7.58024 3.78532 7.66023 3.78671 7.74074C3.78811 7.82125 3.80534 7.90069 3.83744 7.97454C3.86953 8.04839 3.91586 8.11519 3.97377 8.17113L6.27777 10.4751C6.33355 10.5314 6.39991 10.576 6.47303 10.6065C6.54614 10.6369 6.62457 10.6526 6.70377 10.6526C6.78298 10.6526 6.86141 10.6369 6.93452 10.6065C7.00764 10.576 7.074 10.5314 7.12977 10.4751L12.0258 5.57913C12.0867 5.52295 12.1353 5.45476 12.1685 5.37886C12.2018 5.30296 12.2189 5.22099 12.2189 5.13813C12.2189 5.05527 12.2018 4.97331 12.1685 4.89741C12.1353 4.82151 12.0867 4.75332 12.0258 4.69713Z" fill="#101010"/>
                                </g>
                                </svg>
                            </div>
                            <div className={`grow shrink basis-0 text-stone-950 text-lg lg:text-xl font-normal`}>Financial Freedom</div>
                        </div>
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="w-6 h-6 p-1 bg-slate-300 rounded-3xl border justify-center items-center gap-1 flex">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="u:check">
                                <path id="Vector" d="M12.0258 4.69713C11.97 4.6409 11.9036 4.59626 11.8305 4.5658C11.7574 4.53534 11.679 4.51965 11.5998 4.51965C11.5206 4.51965 11.4421 4.53534 11.369 4.5658C11.2959 4.59626 11.2296 4.6409 11.1738 4.69713L6.70377 9.17313L4.82577 7.28913C4.76786 7.23319 4.6995 7.1892 4.62458 7.15968C4.54967 7.13016 4.46968 7.11568 4.38917 7.11707C4.30866 7.11846 4.22921 7.1357 4.15537 7.1678C4.08152 7.19989 4.01472 7.24622 3.95877 7.30413C3.90283 7.36205 3.85884 7.43041 3.82932 7.50532C3.7998 7.58024 3.78532 7.66023 3.78671 7.74074C3.78811 7.82125 3.80534 7.90069 3.83744 7.97454C3.86953 8.04839 3.91586 8.11519 3.97377 8.17113L6.27777 10.4751C6.33355 10.5314 6.39991 10.576 6.47303 10.6065C6.54614 10.6369 6.62457 10.6526 6.70377 10.6526C6.78298 10.6526 6.86141 10.6369 6.93452 10.6065C7.00764 10.576 7.074 10.5314 7.12977 10.4751L12.0258 5.57913C12.0867 5.52295 12.1353 5.45476 12.1685 5.37886C12.2018 5.30296 12.2189 5.22099 12.2189 5.13813C12.2189 5.05527 12.2018 4.97331 12.1685 4.89741C12.1353 4.82151 12.0867 4.75332 12.0258 4.69713Z" fill="#101010"/>
                                </g>
                                </svg>
                            </div>
                            <div className={`text-stone-950 text-lg lg:text-xl font-normal`}>Credit Responsibility</div>
                        </div>
                    </div>
                </div>
                <Link href="" className="justify-start items-center gap-2.5 flex">
                    <span className={`text-stone-950 text-base font-normal`}>Learn More</span>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="u:arrow-up-right">
                    <path id="Vector" d="M17.9199 7.19104C17.8185 6.9467 17.6243 6.75252 17.3799 6.65104C17.2597 6.5998 17.1306 6.57262 16.9999 6.57104H6.99994C6.73472 6.57104 6.48037 6.6764 6.29283 6.86394C6.1053 7.05147 5.99994 7.30583 5.99994 7.57104C5.99994 7.83626 6.1053 8.09062 6.29283 8.27815C6.48037 8.46569 6.73472 8.57104 6.99994 8.57104H14.5899L6.28994 16.861C6.19621 16.954 6.12182 17.0646 6.07105 17.1865C6.02028 17.3083 5.99414 17.439 5.99414 17.571C5.99414 17.7031 6.02028 17.8338 6.07105 17.9556C6.12182 18.0775 6.19621 18.1881 6.28994 18.281C6.3829 18.3748 6.4935 18.4492 6.61536 18.4999C6.73722 18.5507 6.86793 18.5768 6.99994 18.5768C7.13195 18.5768 7.26266 18.5507 7.38452 18.4999C7.50638 18.4492 7.61698 18.3748 7.70994 18.281L15.9999 9.98104V17.571C15.9999 17.8363 16.1053 18.0906 16.2928 18.2782C16.4804 18.4657 16.7347 18.571 16.9999 18.571C17.2652 18.571 17.5195 18.4657 17.707 18.2782C17.8946 18.0906 17.9999 17.8363 17.9999 17.571V7.57104C17.9984 7.44037 17.9712 7.31127 17.9199 7.19104Z" fill="#101010"/>
                    </g>
                    </svg>
                </Link>
            </div>
        </div>
        <div className="w-full lg:w-[600px]">
            <Image src={featuresImg} width={5000} height={5000} className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] lg:h-[650px] relative rounded-[20px]" alt="features image" />
        </div>
      </div>
    </section>
  );
}
