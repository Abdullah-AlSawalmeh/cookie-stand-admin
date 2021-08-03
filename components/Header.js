import Link from "next/link";
const Header = () => {
  return (
    <header className="flex  justify-between bg-green-500 pl-5 vh20 items-center">
      <h1 className="text-xl w-3/5 font-bold">Cookie Stand Admin</h1>
      <ul className="flex pr-5 w-2/5 justify-end">
        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="/about-us">About</Link>
        </li>
        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="/overview">Overview</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
