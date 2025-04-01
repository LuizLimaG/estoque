'use client'

import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

export function SectionContent({
    children,
    title,
    opened
} : {
    children: React.ReactNode,
    title?: string,
    opened?: boolean
}) {
    const [isOpen, setIsOpen] = useState(false || opened)

    return (
        <section className="w-full bg-white rounded-lg overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 md:p-6 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
            >
                <h1 className="font-bold text-[18px] md:text-[23px] text-slate-800">
                    {title}
                </h1>
                <div className={`transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                }`}>
                    <CaretDown weight="bold" className="text-[15px] md:text-[20px]"/>
                </div>
            </button>
            <div 
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </section>
    )
}