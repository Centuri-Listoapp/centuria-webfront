"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";
import Button from "@/app/components/button/Button";
import InputText from "@/app/components/InputText";
import InputSelect from "@/app/components/InputSelect";
import { COUNTRIES } from "@/app/constants/countries";

const schema = yup
  .object({
    country: yup.string().required("Es requerido"),
    state: yup.string().required("Es requerido"),
    municipality: yup.string().required("Es requerido"),
  })
  .required();

type SaveLocationDialogProps = {
  open: boolean;
  data?: any;
  onClose: Function;
};

const SaveLocationDialog = (props: SaveLocationDialogProps) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.data) reset(props.data);
  }, [props.data]);

  const onSubmit = async (data: any) => {
    console.log("onSubmit.value::", data);
    try {
      setIsLoading(true);
      const res = await generalService.login(data);
      setIsLoading(false);
      reset();
      props.onClose();
    } catch (error) {
      setIsLoading(false);
      alert("Ups ocurrio un error al enviar los datos");
    }
  };

  const clearForm = () => {
    reset({ country: undefined });
  };

  return (
    <Dialog
      myClass="candidates-dialog"
      open={props.open}
      onClose={() => {
        clearForm();
        props.onClose();
      }}
      title={(props.data ? "Editar" : "Agregar") + " Ubicación"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <InputText
          label="País"
          name="country"
          register={register}
          errors={errors}
          dark={true}
        /> */}
        <InputSelect
          label="País"
          name="country"
          register={register}
          errors={errors}
          options={COUNTRIES}
          dark={true}
        />
        <InputSelect
          label="Estado"
          name="state"
          register={register}
          errors={errors}
          options={[{ label: "Test", value: "1" }]}
          dark={true}
        />
        <InputSelect
          label="Municipio / Parroquia"
          name="municipality"
          register={register}
          errors={errors}
          options={[{ label: "Test", value: "1" }]}
          dark={true}
        />
        <Button
          myClass="mt-8"
          fullWidth={true}
          type="submit"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? "Espere..." : "Ingresar"}
        </Button>
      </form>
    </Dialog>
  );
};

export default SaveLocationDialog;
