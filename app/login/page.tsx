"use client";

import { FaGoogle } from "react-icons/fa";
import CustomButton from "../components/custom-button";
import { FiLogIn } from "react-icons/fi";
import CustomInput from "../components/customInput/custom-input";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const router = useRouter();

  const { register } = useForm();

  const handleRegisterClick = () => {
    router.push("/register");
  };

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

          <div className="flex w-full flex-col gap-1">
            <label className="font-semibold text-[#343A40]">E-mail</label>
            <CustomInput
              className="text-base"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <label className="font-semibold text-[#343A40]">Senha</label>
            <CustomInput
              className="text-base"
              placeholder="Digite seu e-mail"
            />
          </div>

          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>

          <p className="text-sm text-black">
            Não tem uma conta?{" "}
            <span
              onClick={handleRegisterClick}
              className="cursor-pointer font-semibold hover:underline"
            >
              Cadastre-se
            </span>
          </p>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
