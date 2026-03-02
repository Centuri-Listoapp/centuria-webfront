"use client";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";

type UploadCenterDialogProps = {
  open: boolean;
  data?: any[];
  onClose: Function;
};

const UploadCenterDialog = (props: UploadCenterDialogProps) => {
  const isCancel = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    if (props.data) upload();
  }, [props.data]);

  const upload = async () => {
    const errors: string[] = [];
    var newData = [...props.data!];
    let count = 0;
    isCancel.current = false;
    for (const item of props.data!) {
      if (isCancel.current) break;
      try {
        console.log("item:", item);
        if (isNaN(Number(item.latitude)))
          throw { message: "Coordenada inválida" };
        await generalService.saveCandidateVotingCenter({
          name: item.name,
          address: {
            country: "VE",
            state: item.state,
            city: item.city,
            coordinates: {
              latitude: Number(item.latitude),
              longitude: Number(item.latitude),
            },
          },
          networkGoalCount: item.networkGoalCount,
          numberOfVoters: item.numberOfVoters,
          // contactUrl: contactUrl,
        });
        count++;
        setCount(count);
        newData = newData.filter((value) => value != item);
      } catch (error) {
        errors.push(`${item.state}. ${(error as any).message}`);
      }
    }
    alert(`${count} registros cargados`);
    if (errors.length > 0) alert(errors.join("\n"));
    props.onClose();
  };

  return (
    <Dialog
      myClass="candidates-dialog"
      open={props.open}
      onClose={() => {
        isCancel.current = true;
        props.onClose();
      }}
      title="Subiendo..."
    >
      <p className="mb-2">Espere a que se suban todos</p>
      <h3 className="candidates-count">
        {count} / {props.data?.length}
      </h3>
    </Dialog>
  );
};

export default UploadCenterDialog;
