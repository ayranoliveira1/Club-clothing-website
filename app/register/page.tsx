import { FiLogIn } from "react-icons/fi";
import CustomButton from "../components/custom-button";
import CustomInput from "../components/customInput/custom-input";

const RegisterPage = () => {
  return (
    <main className="flex h-[100%] items-center justify-center">
      <div className="flex w-[450px] flex-col items-center gap-5">
        <h2 className="text-xl font-bold text-black">Crie a sua conta</h2>

        <div className="h-[1px] w-full bg-[#212529]"></div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Nome</label>

          <CustomInput className="text-base" placeholder="Digite seu nome" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Sobrenome</label>

          <CustomInput className="text-base" placeholder="Digite seu nome" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">E-mail</label>

          <CustomInput className="text-base" placeholder="Digite seu E-mail" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Senha</label>

          <CustomInput className="text-base" placeholder="Digite seu senha" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">
            Confirmação de senha
          </label>

          <CustomInput className="text-base" placeholder="Digite seu senha" />
        </div>

        <CustomButton startIcon={<FiLogIn size={18} />}>
          Criar conta
        </CustomButton>
      </div>
    </main>
  );
};

export default RegisterPage;
