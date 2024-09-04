"use client";

import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import CustomButton from "../components/custom-button";
import { FiLogIn } from "react-icons/fi";
import CustomInput from "../components/customInput/custom-input";

import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import InputErrorMessage from "../components/input-error-message";
import validator from "validator";
import { useState } from "react";
import LoginForm from "../types/login-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const handleLoginClick = (data: FieldValues) => {
    console.log(data);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleOpenRegisterClick = () => {
    router.push("/register");
  };

  return (
    <main className="flex h-[100%] items-center justify-center">
      <form
        onSubmit={handleSubmit(handleLoginClick)}
        className="flex w-[450px] flex-col items-center gap-5"
      >
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
            {...register("email", {
              required: true,
              validate: (value) => {
                return validator.isEmail(value);
              },
            })}
            has_error={!!errors?.email || false}
          />

          {errors?.email?.type === "required" && (
            <InputErrorMessage>E-mail é obrigatório</InputErrorMessage>
          )}

          {errors?.email?.type === "notFound" && (
            <InputErrorMessage>O e-mail não foi encontrado</InputErrorMessage>
          )}

          {errors?.email?.type === "validate" && (
            <InputErrorMessage>E-mail inválido</InputErrorMessage>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Senha</label>

          <div className="relative">
            <CustomInput
              className="text-base"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              has_error={!!errors?.password || false}
            />

            {errors?.password?.type === "required" && (
              <InputErrorMessage>Senha é obrigatório</InputErrorMessage>
            )}

            {errors?.password?.type === "misMatch" && (
              <InputErrorMessage>A senha incorreta</InputErrorMessage>
            )}

            <button
              type="button"
              onClick={handleShowPasswordClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#343A40]"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>

        <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>

        <p className="text-sm text-black">
          Não tem uma conta?{" "}
          <span
            onClick={handleOpenRegisterClick}
            className="cursor-pointer font-semibold hover:underline"
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
