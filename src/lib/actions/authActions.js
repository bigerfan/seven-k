'use server'

import { signIn, signOut } from "../auth"


export const login = async () => {
    await signIn()

}

export const logOut = async () => {
    await signOut()

}

export const signupAction = async (prevState, formData) => {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const repasswrod = formData.get('repassword')

    if (!username || username.length < 8) {
        return { error: 'نام کاربری باید بیش از ۸ نویسه باشد' }
    }

    if (!email || !email.match(regex)) {
        return { error: 'ایمیل وارد شده صحیح نیست' }
    }

    if (!password || password.length < 8) {
        return { error: 'پسوورد باید بیش از ۸ نویسه باشد' }
    }

    if (repasswrod !== password) {
        return { error: 'مقدار تایید شده با مقدار پسوورد هماهنگ نیست' }
    }
    const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
    });

    if (res?.ok) {
        await signIn("credentials", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            redirect: true,
            callbackUrl: "/",
        });

    } else {
        return { error: 'مشکلی پیش اومده لطفا بعدا تلاش کنید' }
    }
}

export const LoginwithGoogle = async ()=>{
    await signIn('google')
}