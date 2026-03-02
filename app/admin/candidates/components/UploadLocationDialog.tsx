"use client";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";

type UploadLocationDialogProps = {
  open: boolean;
  data?: any[];
  onClose: Function;
};

const UploadLocationDialog = (props: UploadLocationDialogProps) => {
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
      const body = {
        ...item,
      };
      try {
        await generalService.createLocation(body);
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

export default UploadLocationDialog;
