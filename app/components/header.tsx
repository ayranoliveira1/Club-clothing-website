import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-primary">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-base font-bold">CLUB CLOTHING</h2>
        <div className="flex items-center gap-10 text-xs font-semibold">
          <span>Explorar</span>
          <span>Login</span>
          <span className="flex items-center gap-1">
            <BsCart3 size={20} />
            <span className="text-sm">5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;