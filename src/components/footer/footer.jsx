import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[var(--btnb)] text-white py-8 z-50 ">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-bold ">فروشگاه ما</h2>
          <p className="text-sm mt-2">بهترین محصولات با بهترین قیمت</p>
        </div>

        <div>
          <h3 className="font-bold">دسترسی سریع</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/">صفحه اصلی</a></li>
            <li><a href="/products">محصولات</a></li>
            <li><a href="/contact">تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">پشتیبانی</h3>
          <p className="text-sm mt-2">📞 ۰۹۱۲۳۴۵۶۷۸۹</p>
          <p className="text-sm">📧 support@example.com</p>
        </div>

        <div>
          <h3 className="font-bold">ما را دنبال کنید</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#"><i className="fab fa-telegram text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

