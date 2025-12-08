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
import { CONFIG } from "@/app/constants/globals";
import { CandidateVotingCenter } from "@/app/models/votingCenter";
import { getOperatingSystem } from "@/app/utils/utils";

const schema = yup
  .object({
    fullName: yup.string().required("Es requerido"),
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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [openInfo, setOpenInfo] = useState(false);
  const [votingCenter, setVotingCenter] = useState<CandidateVotingCenter>();
  const [votingCenters, setVotingCenters] = useState<Option[]>();
  const [captchaToken, _] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState({
    show: false,
    data: undefined,
  });

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

  const acceptTermsSubmit = (data: any) => {
    setAcceptTerms({ data, show: true });
  };

  const onSubmit = async (data: any) => {
    const value = {
      ...data,
      candidateId: props.id,
      phone: `${data.phone}`,
      address: {
        country: "ES",
      },
      captchaToken: `${captchaToken}`,
    };
    console.log("onSubmit.value:", value);
    try {
      setIsLoading(true);
      await generalService.createProspect(value);
      setIsLoading(false);
      setOpenInfo(true);
      setVotingCenter(
        votingCenters?.find((item) => item.value == data.votingCenterId)?.data
      );
      reset();
    } catch (error) {
      setIsLoading(false);
      alert("Ups ocurrio un error al enviar los datos");
    }
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
        // const url = `${REFERRAL_LINK}123`;
        // window.open(url, "_blank");
        window.open(CONFIG.PLAY_STORE, "_blank");
        break;
    }
    setOpenInfo(false);
  };

  const openLink = () => {
    window.open(votingCenter!.contactUrl!, "_blank");
    setOpenInfo(false);
  };

  const goTermsConditions = () => {
    window.open("../../terms-conditions", "_blank");
  };

  const url = votingCenter?.contactUrl;

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit(acceptTermsSubmit)}>
        <InputText
          label="Nombre completo"
          name="fullName"
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
          name="votingCenterId"
          register={register}
          errors={errors}
          options={votingCenters}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Espere..." : "Enviar información"}
        </Button>
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
      <Dialog
        open={acceptTerms.show}
        onClose={() => setAcceptTerms({ show: false, data: undefined })}
      >
        <div className="info-dialog">
          <div className="info-dialog-box" style={{ width: "100%" }}>
            <h1>Terminos y condiciones</h1>
            <br />
            <p>
              Para continuar, debe aceptar los{" "}
              <span
                className="underline click"
                onClick={() => goTermsConditions()}
              >
                términos y condiciones
              </span>
            </p>
            <Button
              onClick={() => {
                setAcceptTerms({ ...acceptTerms, show: false });
                onSubmit(acceptTerms.data);
              }}
            >
              Aceptar términos y condiciones
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
