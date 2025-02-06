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
  primaryButton: React.ReactNode;
  secundaryButton?: React.ReactNode;
  primaryLink: string;
  link?: string;
  icon: React.ReactNode;
}) {
  return (
    <section className="w-full flex items-center justify-between px-4">
      <div>
        <h1 className="font-black text-[30px] text-amber-600">{pageTitle}</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        {link && secundaryButton && (
          <Link
            href={link}
            className="text-black font-medium cursor-pointer hover:underline hover:text-amber-500 transition-all duration-200"
          >
            {secundaryButton}
          </Link>
        )}
        <Link
          href={primaryLink}
          className="flex items-center justify-center gap-2 text-white bg-amber-600 px-2 py-1 rounded-lg hover:bg-amber-500 transition-all duration-200"
        >
          {icon}
          {primaryButton}
        </Link>
      </div>
    </section>
  );
}
