"use client";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";
import Button from "@/app/components/button/Button";
import InputText from "@/app/components/InputText";
import InputSelect, { Option } from "@/app/components/InputSelect";

const schema = yup
  .object({
    countryCode: yup.string().required("Es requerido"),
    stateCode: yup.string().required("Es requerido"),
    name: yup.string().required("Es requerido"),
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
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Option[]>();
  const [states, setStates] = useState<Option[]>([]);
  const country = useWatch({
    control,
    name: "countryCode",
  });

  useEffect(() => {
    if (props.data)
      reset({
        countryCode: props.data.countryCode,
        stateCode: props.data.stateCode,
        name: props.data.cityName,
      });
    getCountries();
  }, [props.data]);

  useEffect(() => {
    if (!country) return;
    changeCountry(country);
  }, [country]);

  const getCountries = async () => {
    setCountries(undefined);
    try {
      const res = await generalService.getCountries();
      const parsedCountries: Option[] = [];
      for (const country of res.countries) {
        parsedCountries.push({
          label: country.name,
          value: country.code,
          data: country.states.map((state) => ({
            value: state.code,
            label: state.name,
          })),
        });
      }
      setCountries(parsedCountries);
      if (props.data) {
        setStates(
          parsedCountries.find((item) => item.value == props.data!.countryCode)
            ?.data,
        );
        reset({
          countryCode: props.data.countryCode,
          stateCode: props.data.stateCode,
          name: props.data.cityName,
        });
      }
    } catch (error) {
      setCountries([]);
      alert("Ups ocurrio un error al obtener los datos");
    }
  };

  const getStates = (states: Option[], code: string) => {
    const option = states.find((item) => item.value == code)!;
    return option.data;
  };

  const changeCountry = (value: string) => {
    if (!countries) return;
    const states = getStates(countries!, value);
    setValue("stateCode", undefined as any);
    setStates(states);
  };

  const onSubmit = async (data: any) => {
    console.log("onSubmit.value::", data);
    try {
      setIsLoading(true);
      await generalService.saveCountryMunicipality({
        ...data,
        municipalityCode: props.data?.cityCode,
      });
      setIsLoading(false);
      clearForm();
      props.onClose();
    } catch (error) {
      setIsLoading(false);
      alert("Ups ocurrio un error al enviar los datos");
    }
  };

  const clearForm = () => {
    reset({ countryCode: undefined, stateCode: undefined, name: undefined });
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
        <InputSelect
          label="País"
          name="countryCode"
          register={register}
          errors={errors}
          options={countries}
          dark={true}
        />
        <InputSelect
          label="Estado"
          name="stateCode"
          register={register}
          errors={errors}
          options={states}
          dark={true}
        />
        <InputText
          label="Nombre"
          name="name"
          register={register}
          errors={errors}
          dark={true}
        />
        <Button
          myClass="mt-8"
          fullWidth={true}
          type="submit"
          color="primary"
          disabled={isLoading || !countries}
        >
          {isLoading ? "Espere..." : "Guardar"}
        </Button>
      </form>
    </Dialog>
  );
};

export default SaveLocationDialog;
