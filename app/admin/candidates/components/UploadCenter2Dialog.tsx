"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";
import { ImportCandidateVotingCenters } from "@/app/models/votingCenter";
import Button from "@/app/components/button/Button";
import DataTable from "@/app/components/datatable/DataTable";
import { importCenterColumns } from "../configs/table-columns";

type UploadCenterDialogProps = {
  open: boolean;
  data?: any[];
  onClose: Function;
};

const UploadCenter2Dialog = (props: UploadCenterDialogProps) => {
  const [importCenter, setImportCenter] =
    useState<ImportCandidateVotingCenters>();

  useEffect(() => {
    if (props.data) upload();
  }, [props.data]);

  const upload = async () => {
    try {
      const data = props.data! as any;
      console.log("upload.importCandidateVotingCenters:", data);
      const res = await generalService.importCandidateVotingCenters({
        file: data,
      });
      setImportCenter(res.importCandidateVotingCenters);
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
          <DataTable columns={importCenterColumns} rows={importCenter.rows} />
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

export default UploadCenter2Dialog;
