"use client";

import { useRouter } from "next/navigation";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <header className="w-full bg-primary">
      <div className="flex items-center justify-between px-[32px] py-5">
        <h2
          onClick={() => router.push("/")}
          className="cursor-pointer text-2xl font-bold"
        >
          CLUB CLOTHING
        </h2>
        <div className="flex items-center gap-10 text-sm font-semibold">
          <button>Explorar</button>
          <button onClick={handleLoginClick}>Login</button>
          <button className="flex items-center gap-1">
            <BsCart3 size={20} />
            <span>5</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
