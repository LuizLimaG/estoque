'use client'

import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

export function SectionContent({
    children,
    title
} : {
    children: React.ReactNode,
    title: string
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="w-full bg-white rounded-lg overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 bg-white flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
            >
                <h1 className="font-bold text-[23px] text-slate-800">
                    {title}
                </h1>
                <div className={`transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                }`}>
                    <CaretDown size={20} weight="bold"/>
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