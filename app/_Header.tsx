import Link from "next/link";
import { FaPollH, FaSearch } from "react-icons/fa";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between p-2 border-b-[1px] border-slate-50 sticky">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center space-x-1">
          <FaPollH className="w-12 h-12" />
          <span className="font-bold text-2xl">Pollin'</span>
        </div>
      </Link>
      <form>
        <label
          htmlFor="search-bar"
          className="flex justify-start items-center px-2 rounded-full bg-slate-50"
        >
          <FaSearch />
          <input
            id="search-bar"
            className="px-2 py-1 rounded-md focus:outline-none bg-slate-50 focus:placeholder-slate-50 transition duration-150 italic text-slate-500 placeholder:text-sm"
            type={"text"}
            placeholder={"Search a poll..."}
          />
        </label>
      </form>
    </header>
  );
};

export default Header;
