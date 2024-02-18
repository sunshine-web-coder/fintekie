"use client"

import { inter } from "@/app/fonts/fonts";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="px-[16px] fixed top-0 left-0 right-0 bg-white z-50 w-full md:relative lg:px-[64px] py-5">
      <div className="inner_section flex-col md:flex-row flex items-start md:relative md:items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <div className={`flex items-center gap-[2px] text-stone-950 text-2xl font-semibold ${inter.className}`}>
            <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 272" clipPath="url(#clip0_218_2589)">
            <rect width="26.0292" height="40.903" transform="translate(0 6.44547) rotate(-14.337)" fill="#446D9B"/>
            <rect id="Rectangle 4" x="10.8535" y="-5.92355" width="3.18308" height="40.903" transform="rotate(16.5787 10.8535 -5.92355)" fill="#5386BF"/>
            <rect id="Rectangle 5" x="14.9165" y="-5.04288" width="5.28106" height="45.5016" transform="rotate(16.5787 14.9165 -5.04288)" fill="#5386BF"/>
            <rect id="Rectangle 6" x="26.2998" y="34.2654" width="5.57768" height="5.57768" transform="rotate(-14.337 26.2998 34.2654)" fill="#FFA200"/>
            </g>
            <defs>
            <clipPath id="clip0_218_2589">
            <rect width="26.0292" height="40.903" fill="white" transform="translate(0 6.44547) rotate(-14.337)"/>
            </clipPath>
            </defs>
            </svg>
            <span>Fintekie</span>  
          </div>
          <div className="block md:hidden">
            <svg onClick={handleClose} className={`${isOpen ? "block" : "hidden"}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.40994 8L15.7099 1.71C15.8982 1.5217 16.004 1.2663 16.004 1C16.004 0.733701 15.8982 0.478306 15.7099 0.290002C15.5216 0.101699 15.2662 -0.00408936 14.9999 -0.00408936C14.7336 -0.00408936 14.4782 0.101699 14.2899 0.290002L7.99994 6.59L1.70994 0.290002C1.52164 0.101699 1.26624 -0.00408912 0.999939 -0.00408912C0.733637 -0.00408912 0.478243 0.101699 0.289939 0.290002C0.101635 0.478306 -0.00415253 0.733701 -0.00415254 1C-0.00415254 1.2663 0.101635 1.5217 0.289939 1.71L6.58994 8L0.289939 14.29C0.196211 14.383 0.121816 14.4936 0.0710478 14.6154C0.0202791 14.7373 -0.00585938 14.868 -0.00585938 15C-0.00585938 15.132 0.0202791 15.2627 0.0710478 15.3846C0.121816 15.5064 0.196211 15.617 0.289939 15.71C0.382902 15.8037 0.493503 15.8781 0.615362 15.9289C0.737221 15.9797 0.867927 16.0058 0.999939 16.0058C1.13195 16.0058 1.26266 15.9797 1.38452 15.9289C1.50638 15.8781 1.61698 15.8037 1.70994 15.71L7.99994 9.41L14.2899 15.71C14.3829 15.8037 14.4935 15.8781 14.6154 15.9289C14.7372 15.9797 14.8679 16.0058 14.9999 16.0058C15.132 16.0058 15.2627 15.9797 15.3845 15.9289C15.5064 15.8781 15.617 15.8037 15.7099 15.71C15.8037 15.617 15.8781 15.5064 15.9288 15.3846C15.9796 15.2627 16.0057 15.132 16.0057 15C16.0057 14.868 15.9796 14.7373 15.9288 14.6154C15.8781 14.4936 15.8037 14.383 15.7099 14.29L9.40994 8Z" fill="black"/>
            </svg>
              <svg onClick={handleOpen} className={`${isOpen ? "hidden" : "block"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"/>
              </svg>
          </div>
        </div>
        <nav className={`flex absolute top-[50px] md:top-0 bg-white md:p-0 p-[16px] left-[-100%] md:left-0 w-full sm:max-w-[384px] right-0 md:max-w-max md:relative mt-8 md:mt-0 h-screen md:h-0 flex-col md:flex-row gap-7 ${isOpen ? "left-[0%]" : ""}`}>
          <ul className={`flex flex-col md:flex-row gap-7 text-stone-950 text-base font-normal items-start md:items-center ${inter.className}`}>
            <li><Link href="">Home</Link></li>
            <li><Link href="">Pricing</Link></li>
            <li><Link href="">Legal</Link></li>
          </ul>
          <div className={`flex items-center text-stone-950 text-base font-medium gap-2`}>
            <Link className={`w-[107px] h-[49px] px-[20px] py-[15px] rounded-[10px] border border-stone-950 justify-center items-center gap-2.5 flex`} href="">Log In</Link>
            <Link className={`w-[118px] h-[49px] text-neutral-100 px-[20px] py-[15px] bg-slate-500 rounded-[10px] border justify-center items-center gap-2.5 flex`} href="">
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
