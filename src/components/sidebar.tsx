"use client"
import { ArrowLineLeft, ArrowLineRight } from "@phosphor-icons/react";
import { MoreVertical, ChevronLast, ChevronFirst, LogOut } from "lucide-react"
import Link from "next/link";
import { useContext, createContext, useState, JSX } from "react"

interface SidebarProps {
    children: React.ReactNode;
  }
  interface SidebarContextType {
    expanded: boolean;
  }
  

const SidebarContext = createContext<SidebarContextType>({ expanded: false });

export default function Sidebar(props: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="z-50 h-screen hidden min-h-screens shadow-2xl font-poppins fixed md:flex">
      <nav
        className={`h-full flex flex-col bg-amber-600 shadow-sm ${
          !expanded && "items-center"
        }`}
      >
        <div
          className={`flex justify-between items-center p-4 ${
            expanded ? "flex-row pb-0 pt-0 pl-6" : "flex-col pt-6"
          }`}
        >
          {expanded && <LogOut />}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg shadow-3D" 
          >
            {expanded ? (
              <ArrowLineLeft size={24} />
            ) : (
              <ArrowLineRight size={24} />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{props.children}</ul>
        </SidebarContext.Provider>

        <div
          className={`border-t flex p-3 items-center justify-evenly ${
            !expanded && "flex-col"
          }`}
        >
            {/*
          {!user ? (
          <Link className={`font-medium rounded-md flex items-center bg-[#060058] py-2 px-3 shadow-3D ease-in-out hover:opacity-95 duration-300  ${!expanded ? "" : "w-full"}`} href="/autenticacao">
            <SignIn size={24} color="white" weight="bold" />
            <span className={`${!expanded ? "hidden" : "block"} text-white text-sm ml-3`}>Entrar/Cadastrar</span>
          </Link>
          ) : (
            <div onClick={logout} className={`cursor-pointer font-medium rounded-md flex items-center bg-[#FF4343] py-2 px-3 shadow-3D ease-in-out hover:opacity-95 duration-300  ${!expanded ? "" : "w-full"}`}>
            <SignOut size={24} color="white" weight="bold" />
            <span className={`${!expanded ? "hidden" : "block"} text-white text-sm ml-3`}>Sair</span>
          </div>
          )
          }
          */}
        </div>
      </nav>
    </aside>

  )
}
interface SidebarItemProps {
    icon: JSX.Element;
    text: string;
    active?: boolean;
    alert?: boolean;
    link: string;
  }
  
  export function SidebarItem(props: SidebarItemProps) {
    const { expanded } = useContext(SidebarContext);
    return (
      <Link
        href={props.link}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          props.active ? "bg-[#DDE3EA]" : "hover:bg-blue-200 text-grey-600"
        }`}
      >
        {props.icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {props.text}
        </span>
        {props.alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-[#060058] ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-blue-200 text-blue-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {props.text}
          </div>
        )}
      </Link>
    );
  
}