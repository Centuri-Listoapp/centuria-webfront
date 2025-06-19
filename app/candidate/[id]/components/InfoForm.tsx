"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "@/app/components/InputText";
import InputSelect, { Option } from "@/app/components/InputSelect";
import Dialog from "@/app/components/dialog/Dialog";
import { useEffect, useState } from "react";
import Button from "@/app/components/button/Button";
import generalService from "@/app/services/generalService";
import { CONFIG, REFERRAL_LINK } from "@/app/constants/globals";
import { CandidateVotingCenter } from "@/app/models/votingCenter";
import { getOperatingSystem } from "@/app/utils/utils";

const schema = yup
  .object({
    name: yup.string().required("Es requerido"),
    phone: yup
      .number()
      .typeError("Debe ser un número")
      .positive("Debe ser un número")
      .integer("Debe ser un número")
      .required("Es requerido"),
    email: yup.string().email("Debe ser un email").required("Es requerido"),
    // votingCenter: yup.number(),
  })
  .required();

type Props = {
  id: string;
};

export default function InfoForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [openInfo, setOpenInfo] = useState(false);
  const [votingCenter, setVotingCenter] = useState<CandidateVotingCenter>();
  const [votingCenters, setVotingCenters] = useState<Option[]>();

  useEffect(() => {
    getCandidateVotingCenters();
  }, []);

  const getCandidateVotingCenters = async () => {
    try {
      const res = await generalService.getCandidateVotingCenters(props.id);
      setVotingCenters(
        res.candidateVotingCenters.map((item) => ({
          label: item.name,
          value: item.id,
          data: item,
        }))
      );
    } catch (error) {
      alert("Ups ocurrio un error al obtener los centros de votación");
    }
  };

  const onSubmit = (data: any) => {
    console.log("data:", data);
    setOpenInfo(true);
    setVotingCenter(
      votingCenters?.find((item) => item.value == data.votingCenter)?.data
    );
  };

  const downloadApp = () => {
    const os = getOperatingSystem();
    switch (os) {
      case "Android":
        window.open(CONFIG.PLAY_STORE, "_blank");
        break;
      case "iOS":
        window.open(CONFIG.APP_STORE, "_blank");
        break;
      default:
        const url = `${REFERRAL_LINK}123`;
        window.open(url, "_blank");
        break;
    }
    setOpenInfo(false);
  };

  const openLink = () => {
    window.open(votingCenter!.contactUrl!, "_blank");
    setOpenInfo(false);
  };

  const url = votingCenter?.contactUrl;

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Nombre completo"
          name="name"
          register={register}
          errors={errors}
        />
        <InputText
          label="Teléfono"
          name="phone"
          register={register}
          errors={errors}
        />
        <InputText
          label="Correo"
          name="email"
          register={register}
          errors={errors}
        />
        <InputSelect
          label="Centro de votación"
          name="votingCenter"
          register={register}
          errors={errors}
          options={votingCenters}
        />
        <Button type="submit">Enviar información</Button>
      </form>
      <Dialog open={openInfo} onClose={() => setOpenInfo(false)}>
        <div className="info-dialog">
          <div
            className="info-dialog-box"
            style={{ width: url ? undefined : "100%" }}
          >
            <h1>¿Quieres ser parte de nuestro equipo de activistas?</h1>
            <Button onClick={() => downloadApp()}>Descarga la App</Button>
          </div>
          {url && (
            <div className="info-dialog-box">
              <h1>¿Quieres estar informado de todas nuestras actividades?</h1>
              <Button onClick={() => openLink()}>
                Ir al grupo de WhatsApp
              </Button>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
