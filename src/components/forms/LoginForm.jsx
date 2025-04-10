"use client";


import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LoginwithGoogle } from "@/lib/actions/authActions";
import { FcGoogle } from "react-icons/fc";

const LoginForm = React.memo(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result.error) {
            setError(result.error);
        } else {
            router.prefetch('/')
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="px-4 py-8 bg-[#EB8317] w-[100%] md:w-[80%] m-auto h-fit">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 my-4 text-white h-fit">
                <div className="flex flex-col px-8 gap-2">
                    <label htmlFor="email">ایمیل</label>
                    <input
                        className="inputDefault"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ایمیل..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col px-8 gap-2">
                    <label htmlFor="password">گذرواژه</label>
                    <input
                        className="inputDefault"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="رمز عبور..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <span className="text-red-500 px-8">{error}</span>}
                <button className="defaultBtn mx-8 bg-[#FFB534!important]">ورود</button>
            </form>
            <form action={LoginwithGoogle} className='mx-8'>
                <button type='submit' className='defaultBtn w-[100%] flex items-center justify-center gap-2 '>
                    <FcGoogle className="text-4xl"/>
                    وارد شدن با اکانت گوگل</button>
            </form>
        </motion.div>
    );
})

export default LoginForm;