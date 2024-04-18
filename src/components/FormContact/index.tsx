"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import Input from "../Input";
import Textarea from "../Textarea";

interface IFormContact {
  name: string;
  email: string;
  message: string;
}
export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormContact>();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data: IFormContact) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SEND_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_SEND_EMAIL_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_SEND_EMAIL_PUBLIC_KEY as string,
      )
      .then(() => {
        setSuccess(true);
        reset();
      });
  };

  return (
    <form className="flex flex-col max-w-xl" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nome"
        type="text"
        register={register("name", {
          required: true,
          maxLength: {
            value: 100,
            message: "O nome deve ter no maximo 100 caracteres",
          },
          minLength: {
            value: 3,
            message: "O nome deve ter no minimo 3 caracteres",
          },
        })}
        showError={!!errors.name}
        messageError={errors.name?.message as string}
      />
      <Input
        placeholder="Email"
        type="email"
        register={register("email", {
          required: true,
          validate: {
            email: email => validator.isEmail(email) || "Email inválido",
          },
        })}
        showError={!!errors.email}
        messageError={errors.email?.message as string}
      />
      <Textarea
        register={register("message", {
          required: true,
          maxLength: {
            value: 1024,
            message: "A mensagem deve ter no maximo 1024 caracteres",
          },
          minLength: {
            value: 20,
            message: "A mensagem deve ter no minimo 20 caracteres",
          },
        })}
        showError={!!errors.message}
        messageError={errors.message?.message as string}
        classNameTextarea="h-40 resize-none"
        placeholder="Mensagem"
        maxLength={1024}
      />
      <div className="flex justify-between">
        <button type="submit" className="btnLinkProject sm:max-w-40 max-w-28">
          Enviar
        </button>
        {success && (
          <p className="text-green-800 bg-green-200 py-2 px-4 rounded">
            Mensagem enviada com sucesso!
          </p>
        )}
      </div>
    </form>
  );
}
