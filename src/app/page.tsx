import next from "next";
import Link from "next/link";

export default function Home() {
  return (
        <div>
            <div className="flex flex-col items-center justify-between gap-20">
                <div className="border-3 border-rose-400 rounded-3xl"><p className="p-2">2003 оноос хойш</p></div>
                <div className="flex gap-4 text-7xl font-bold"><p className="text-rose-400">Premium</p><p>Electronics</p></div>
                <p className="font-medium text-3xl font-stretch-ultra-expanded">Дэлхийн тэргүүлэх технологийн худалдааны төв</p>
                <p>Дэлхийн тэргүүлэгч технологийн брэндүүдийг Монголын хэрэглэгчдэд ойртуулсаар ирсэн</p>
                <p>Доош шударна уу</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
  );
}
