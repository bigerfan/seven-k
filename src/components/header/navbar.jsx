'use client'

import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

export const Navbar = ({ user }) => {

    const [slideOp, setOp] = useState(false)

    const toggleMenu = () => {
        setOp(!slideOp);
    }

    const accountLink =
        user ?
            <Link href={'/profile'}><li className="cursor-pointer text-[var(--text)] font-bold"> اکانت</li></Link>
            :
            <Link href={'/logup'}><li className="cursor-pointer text-[var(--text)] font-bold">وارد شوید</li></Link>

    return (
        <header className="flex md:justify-around justify-between items-center px-6 py-4 shadow-md bg-white z-50 opacity-90 fixed top-0 w-[100%] ">
            <Link href={'/'}>
                <h1 className="text-2xl font-bold">هفت</h1>
            </Link>

            <nav className="flex justify-between ">
                <ul className=" gap-6 text-lg hidden md:flex">
                    <Link href={'/products'} >
                        <li className="cursor-pointer hover:text-gray-600">محصولات</li>
                    </Link>
                    <li className="cursor-pointer hover:text-gray-600">تماس با ما</li>
                    <Link href={'/shoppingcart'}>
                        <li className="cursor-pointer hover:text-gray-600">سبد خرید</li>
                    </Link>
                    {accountLink}
                </ul>

                <div className="md:hidden">
                    <button className="flex justify-center items-center" onClick={toggleMenu}>
                        <BiMenu className=" font-bold text-2xl" />
                    </button>
                </div>
                <div className={`md:hidden fixed items-center top-0 left-0 w-[50vw] h-[100vh] bg-[var(--btnlight)] z-50 transition-transform  duration-300 ${slideOp ? "transform translate-x-0" : "transform -translate-x-full"
                    }`}>
                    <ul className=" gap-6 text-lg flex flex-col justify-center items-center my-8 text-[var(--textlight)]">
                        <li className="cursor-pointer" onClick={toggleMenu}>
                            <BiMenu className=" font-bold text-2xl text-[var(--text)]" />
                        </li>

                        <li className=" text-[var(--text)] font-bold">تماس با ما</li>
                        <li className="text-[var(--text)] font-bold" >
                            <Link href={'/shoppingcart'} onClick={toggleMenu}>
                                سبد خرید
                            </Link>
                        </li>
                        <li className="text-[var(--text)] font-bold" >
                        <Link href={'/products'} onClick={toggleMenu}>
                            محصولات
                        </Link>
                        </li>
                        {accountLink}
                    </ul>
                </div>
            </nav>

        </header>)
}
