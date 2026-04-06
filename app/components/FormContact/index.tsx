import { useRemixForm } from "remix-hook-form";
import { Form, useActionData } from "react-router";
import Input from "../ui/Input";
import { formContactSchema } from "~/utils/schema/formContactSchema";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Textarea from "../ui/Textearea";
import { useEffect } from "react";
import toast from "react-hot-toast";

type FormData = z.infer<typeof formContactSchema>;
const resolver = zodResolver(formContactSchema);

export default function FormContact() {
  const data = useActionData();
  useEffect(() => {
    if (data && data.success) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "opacity-100" : "opacity-0"
          } ring-opacity-5 pointer-events-auto flex w-full max-w-md rounded-lg border-l-8 border-l-green-500 bg-green-200 shadow-lg ring-1 ring-green-600 transition-all duration-300`}>
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Votre message a bien été envoyé !
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Nous vous répondrons dans les plus bref délai.
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
      reset();
    }
  }, [data]);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useRemixForm<FormData>({
    mode: "onBlur",
    resolver,
  });
  return (
    <div>
      <Form
        className="flex flex-col gap-4"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}>
        <div className="flex flex-col gap-9 md:flex-row">
          <Input
            label="Nom"
            {...register("lastname", { required: true })}
            error={errors.lastname?.message}
          />
          <Input
            label="Prénom"
            {...register("firstname", { required: true })}
            error={errors.firstname?.message}
          />
        </div>
        <div className="flex flex-col gap-9 md:flex-row">
          <Input
            label="Email"
            {...register("email", { required: true })}
            error={errors.email?.message}
          />
          <Input
            label="Téléphone"
            {...register("phone", { required: true })}
            error={errors.phone?.message}
          />
        </div>
        <div className="flex flex-col gap-9 md:flex-row">
          <Textarea
            label="Message"
            {...register("message", { required: true })}
            error={errors.message?.message}
          />
        </div>
        <div className="flex justify-center pt-6">
          <button
            className="bg-tertiary-blue w-fit cursor-pointer rounded-md px-5 py-1 text-white"
            type="submit">
            Envoyer le message
          </button>
        </div>
      </Form>
    </div>
  );
}
