import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
const playFair = Playfair_Display({ subsets: ["latin"] });

const NavItem = ({ path, name }) => {
  const pathName = usePathname();
  const booleanPath = pathName === path;
  return (
    <Link href={path}>
      <span
        className={`${playFair.className} transition-all relative py-1 px-2  ${
          booleanPath ? "text-[#ffffff]" : "text-neutral-500"
        } hover:text-neutral-200`}
      >
        {name}
        <div
          className={`absolute h-[1px] top-7 mx-2 ${
            booleanPath && "inset-0"
          }   bg-neutral-600 z-[-1] bg-gradient-to-r from-transparent to-neutral-900`}
        ></div>
      </span>
    </Link>
  );
};
export default NavItem;
