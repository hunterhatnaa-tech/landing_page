import React from "react";

export default function Header(){
    return (
        <div className="bg-gray-800">
            <main className="flex flex-row flex-wrap">
                <a className="cursor-pointer p-2 text-white border-2">logo</a>
                <a className="cursor-pointer p-2 text-white border-2">Нүүр</a>
                <a className="cursor-pointer p-2 text-white border-2">Бүтээгдэхүүн</a>
        </main>
    </div>
    )
}