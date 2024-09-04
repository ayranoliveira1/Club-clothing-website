"use client";

import { FiLogIn } from "react-icons/fi";
import CustomButton from "../components/custom-button";
import CustomInput from "../components/customInput/custom-input";
import { FieldValues, useForm } from "react-hook-form";
import InputErrorMessage from "../components/input-error-message";
import validator from "validator";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SingUpForm from "../types/sing-up-form";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SingUpForm>();

  const handleRegisterClick = (data: FieldValues) => {
    console.log(data);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <main className="flex h-[100%] items-center justify-center">
      <form
        onSubmit={handleSubmit(handleRegisterClick)}
        className="flex w-[450px] flex-col items-center gap-5"
      >
        <h2 className="text-xl font-bold text-black">Crie a sua conta</h2>

        <div className="h-[1px] w-full bg-[#212529]"></div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Nome</label>

          <CustomInput
            className="text-base"
            placeholder="Digite seu nome"
            {...register("name", {
              required: true,
              minLength: 3,
            })}
            has_error={!!errors?.name || false}
          />

          {errors?.name?.type === "minLength" && (
            <InputErrorMessage>
              Nome deve ter pelo menos 3 caracteres
            </InputErrorMessage>
          )}

          {errors?.name?.type === "required" && (
            <InputErrorMessage>Nome obrigatório</InputErrorMessage>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Sobrenome</label>

          <CustomInput
            className="text-base"
            placeholder="Digite seu nome"
            {...register("lastName", {
              required: true,
              minLength: 3,
            })}
            has_error={!!errors?.lastName || false}
          />

          {errors?.lastName?.type === "required" && (
            <InputErrorMessage>Sobrenome obrigatório</InputErrorMessage>
          )}

          {errors?.lastName?.type === "minLength" && (
            <InputErrorMessage>
              Sobrenome deve ter pelo menos 3 caracteres
            </InputErrorMessage>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">E-mail</label>

          <CustomInput
            className="text-base"
            placeholder="Digite seu E-mail"
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

          {errors?.email?.type === "validate" && (
            <InputErrorMessage>E-mail inválido</InputErrorMessage>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">Senha</label>

          <div className="relative">
            <CustomInput
              type={showPassword ? "text" : "password"}
              className="text-base"
              placeholder="Digite seu senha"
              {...register("password", {
                required: true,
                minLength: 8,
                validate: (value) => {
                  return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                  });
                },
              })}
              has_error={!!errors?.password || false}
            />

            <button
              type="button"
              onClick={handleShowPasswordClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#343A40]"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {errors?.password?.type === "required" && (
            <InputErrorMessage>Senha é obrigatório</InputErrorMessage>
          )}

          {errors?.password?.type === "minLength" && (
            <InputErrorMessage>
              Senha deve ter pelo menos 8 caracteres
            </InputErrorMessage>
          )}

          {errors?.password?.type === "validate" && (
            <InputErrorMessage>
              Senha deve ter pelo menos uma letra maiúscula, uma letra
              minúscula, um número e um caractere específico
            </InputErrorMessage>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-[#343A40]">
            Confirmação de senha
          </label>

          <div className="relative">
            <CustomInput
              type={showConfirmPassword ? "text" : "password"}
              className="text-base"
              placeholder="Digite seu senha"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => {
                  return value === getValues("password");
                },
              })}
            />

            <button
              type="button"
              onClick={handleShowConfirmPasswordClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#343A40]"
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          {errors?.passwordConfirmation?.type === "required" && (
            <InputErrorMessage>
              Confirmação de senha é obrigatório
            </InputErrorMessage>
          )}

          {errors?.passwordConfirmation?.type === "validate" && (
            <InputErrorMessage>As senhas não conferem</InputErrorMessage>
          )}
        </div>

        <CustomButton type="submit" startIcon={<FiLogIn size={18} />}>
          Criar conta
        </CustomButton>
      </form>
    </main>
  );
};

export default RegisterPage;
