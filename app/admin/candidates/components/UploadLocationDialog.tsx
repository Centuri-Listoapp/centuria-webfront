"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";
import { ImportCountryLocations } from "@/app/models/votingCenter";
import DataTable from "@/app/components/datatable/DataTable";
import { importLocationColumns } from "../configs/table-columns";
import Button from "@/app/components/button/Button";

type UploadLocationDialogProps = {
  open: boolean;
  data?: any;
  onClose: Function;
};

const UploadLocationDialog = (props: UploadLocationDialogProps) => {
  const [importCenter, setImportCenter] = useState<ImportCountryLocations>();

  useEffect(() => {
    if (props.data) upload();
  }, [props.data]);

  const upload = async () => {
    try {
      const data = props.data!;
      console.log("upload.importCountryLocations:", data);
      const res = await generalService.importCountryLocations({
        file: data,
      });
      setImportCenter(res.importCountryLocations);
    } catch (error) {
      props.onClose();
      alert("Ups ocurrio un error al subir los centros de votación");
    }
  };

  const handleClose = () => {
    if (!importCenter) return;
    props.onClose();
    setImportCenter(undefined);
  };

  return (
    <Dialog
      myClass="candidates-dialog"
      open={props.open}
      onClose={() => {
        handleClose();
      }}
      width={960}
      title="Subir"
    >
      {!importCenter ? (
        <p className="mb-2">Espere a que se suban todos</p>
      ) : (
        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
            <span>
              <strong>Duplicados:</strong> {importCenter.duplicateCount}
            </span>
            <span>
              <strong>Fallidos:</strong> {importCenter.failedCount}
            </span>
            <span>
              <strong>Creados:</strong> {importCenter.createdCount}
            </span>
            <span>
              <strong>Actualizados:</strong> {importCenter.updatedCount}
            </span>
            <span>
              <strong>Recuento sin cambios:</strong>{" "}
              {importCenter.unchangedCount}
            </span>
            <span>
              <strong>Total:</strong> {importCenter.totalRows}
            </span>
          </div>
          <DataTable columns={importLocationColumns} rows={importCenter.rows} />
          <div className="flex justify-end mt-4">
            <Button color="text" onClick={handleClose}>
              Aceptar
            </Button>
          </div>
        </div>
      )}

      {/* <h3 className="candidates-count">
        {count} / {props.data?.length}
      </h3> */}
    </Dialog>
  );
};

export default UploadLocationDialog;
