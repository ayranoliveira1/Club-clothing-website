import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-primary">
      <div className="flex items-center justify-between px-[32px] py-10">
        <h2 className="text-2xl font-bold">CLUB CLOTHING</h2>
        <div className="flex items-center gap-10 text-sm font-semibold">
          <span>Explorar</span>
          <span>Login</span>
          <span className="flex items-center gap-1">
            <BsCart3 size={20} />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
