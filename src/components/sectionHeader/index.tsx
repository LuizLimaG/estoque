import { Gear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function SectionHeader({
  pageTitle,
  primaryButton,
  secundaryButton,
  primaryLink,
  link,
  icon,
}: {
  pageTitle: string;
  primaryButton?: React.ReactNode;
  secundaryButton?: React.ReactNode;
  primaryLink: string;
  link?: string;
  icon?: React.ReactNode;
}) {
  return (
    <section className="w-full flex items-center justify-between p-4 rounded-lg bg-white">
      <div>
        <h1 className="font-black text-[21px] md:text-[30px] text-slate-800">{pageTitle}</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3">
        {link && secundaryButton && (
          <Link
            href={link}
            className="text-slate-800 font-medium cursor-pointer hover:underline hover:text-slate-800 transition-all duration-200"
          >
            {secundaryButton}
          </Link>
        )}
        <Link
          href={primaryLink}
          className="flex items-center justify-center gap-2 text-[13px] md:text-[18px] text-white bg-slate-800 px-2 py-1 rounded-lg hover:bg-slate-700 transition-all duration-200"
        >
          {icon}
          {primaryButton}
        </Link>
      </div>
    </section>
  );
}
