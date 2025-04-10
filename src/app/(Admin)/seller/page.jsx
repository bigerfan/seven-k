'use client'

import { FaUsers, FaBoxOpen, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { SummaryCard } from "@/components/admincomponents/adminSummary/SummaryCard";
import { SalesCharts } from "@/components/admincomponents/adminSummary/salesCharts";
import { CategoryChart } from "@/components/admincomponents/adminSummary/categoryChart";
import { LastComments } from "@/components/admincomponents/adminSummary/comments/lastComments";




const SummaryPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">خلاصه وضعیت</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <SummaryCard title="محصولات موجود" value="320" icon={<FaBoxOpen />} />
        <SummaryCard title="تعداد کاربران" value="850" icon={<FaUsers />} />
        <SummaryCard title="درآمد کل" value="45,000,000 تومان" icon={<FaMoneyBillWave />} />
        <SummaryCard title="کل سفارشات" value="120" icon={<FaShoppingCart />} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="روند فروش ماهانه">
            <SalesCharts/>
        </ChartCard>
        <ChartCard title="دسته‌بندی محصولات">
            <CategoryChart/>
        </ChartCard>
      </div>
      <h2 className="my-4 mx-2 text-2xl">آخرین کامنت ها</h2>
      <LastComments/>
    </div>
  );
};

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

export default SummaryPage;
