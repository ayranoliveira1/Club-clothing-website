import { FaGoogle } from "react-icons/fa";
import CustomButton from "../components/custom-button";
import { FiLogIn } from "react-icons/fi";
import CustomInput from "../components/customInput/custom-input";

const LoginPage = () => {
  return (
    <>
      <main className="flex h-[100%] items-center justify-center">
        <div className="flex w-[450px] flex-col items-center gap-5">
          <h2 className="text-xl font-bold text-black">Entre com sua conta</h2>

          <CustomButton startIcon={<FaGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>

          <span className="tex-sm font-semibold text-black">
            ou entre com seu e-mail
          </span>

          <div className="h-[1px] w-full bg-[#212529]"></div>

          <div className="after: w-full">
            <label className="font-semibold text-[#212529]">E-mail</label>
            <CustomInput
              className="text-base"
              placeholder="Digite seu e-mail"
              type="email"
            />
          </div>

          <div className="after: w-full">
            <label className="font-semibold text-[#212529]">Senha</label>
            <CustomInput
              className="text-base"
              placeholder="Digite seu e-mail"
              type="password"
            />
          </div>

          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
