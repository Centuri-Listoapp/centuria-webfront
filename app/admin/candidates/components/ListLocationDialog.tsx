"use client";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "@/app/components/dialog/Dialog";
import generalService from "@/app/services/generalService";
import Button from "@/app/components/button/Button";
import DataTable from "@/app/components/datatable/DataTable";
import { locationColumns } from "../configs/table-columns";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputSelect from "@/app/components/InputSelect";
import { COUNTRIES } from "@/app/constants/countries";

type ListLocationDialogProps = {
  open: boolean;
  onClose: Function;
  onEdit: (item: any) => void;
};

const ListLocationDialog = (props: ListLocationDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<any[]>();
  const country = useRef(undefined);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const value = country.current;
    console.log("coutry:", value);
    setLocations(undefined);
    try {
      const res = await generalService.getCandidates();
      setLocations(res.candidates.data);
    } catch (error) {
      alert("Ups ocurrio un error al obtener los datos");
    }
  };

  const onChange = ({ target }: any) => {
    country.current = target.value;
    getLocations();
  };

  const registerSearch = (_: any) => {
    return { onChange };
  };

  const deleteLocation = async (id: string) => {
    console.log("deleteLocation.id:", id);
    setIsLoading(true);
    try {
      const res = await generalService.getCandidates();
      setIsLoading(false);
      getLocations();
    } catch (error) {
      setIsLoading(false);
      alert("Ups ocurrio un error al obtener los eliminar");
    }
  };

  return (
    <Dialog
      myClass="candidates-dialog"
      open={props.open}
      onClose={() => props.onClose()}
      title="Ubicaciones Geográficas"
      width={768}
    >
      <div className="mb-6">
        <InputSelect
          myClass="candidates-input-search"
          label="Selecione el país"
          name="country"
          options={COUNTRIES}
          register={registerSearch as any}
          errors={{}}
          dark={true}
        />
      </div>
      <DataTable
        columns={locationColumns}
        rows={locations}
        customColumns={{
          actions: (item) => (
            <div className="flex gap-1">
              <Button
                color="text"
                icon={true}
                disabled={isLoading}
                onClick={() => {
                  props.onClose();
                  props.onEdit(item);
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button
                color="text"
                icon={true}
                disabled={isLoading}
                onClick={() => deleteLocation(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          ),
        }}
      />
    </Dialog>
  );
};

export default ListLocationDialog;
