"use client";
import SimpleCard from "@/app/components/card/SimpleCard";
import {
  faAdd,
  faFile,
  faGlobe,
  faList,
  faSearch,
  faUpload,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./candidates.css";
import Button from "@/app/components/button/Button";
import InputText from "@/app/components/InputText";
import DataTable from "@/app/components/datatable/DataTable";
import {
  candidateColumns,
  locationColumns,
  votingCentersColumns,
} from "./configs/table-columns";
import generalService from "@/app/services/generalService";
import { useEffect, useRef, useState } from "react";
import { Candidate } from "@/app/models/candidates_data";
import authService from "@/app/services/authService";
import SaveLocationDialog from "./components/SaveLocationDialog";
import ListLocationDialog from "./components/ListLocationDialog";
import { EMPTY_LOCATION } from "./configs/constants";
import { ExcelUtils } from "@/app/utils/excel.util";
import UploadLocationDialog from "./components/UploadLocationDialog";
import { CandidateVotingCenter } from "@/app/models/votingCenter";
import parseByColumns from "@/app/utils/parse-by-columns";
import UploadCenterDialog from "./components/UploadCenterDialog";

export default function Home() {
  const query = useRef(undefined);
  const [candidates, setCandidates] = useState<Candidate[]>();
  const [saveLocation, setSaveLocation] = useState({
    open: false,
    data: undefined,
  });
  const [listLocation, setListLocation] = useState(false);
  const fileLocationRef = useRef<any>(undefined);
  const [uploadLocation, setUploadLocation] = useState({
    open: false,
    data: undefined,
  });
  const [votingCenters, setVotingCenters] = useState<
    CandidateVotingCenter[] | undefined
  >([]);
  const fileCenterRef = useRef<any>(undefined);
  const [uploadCenter, setUploadCenter] = useState({
    open: false,
    data: undefined,
  });

  useEffect(() => {
    console.log("Home.auth", authService.loginData);
    getCandidates();
  }, []);

  const onChangeSearch = ({ target }: any) => {
    query.current = target.value;
  };

  const registerSearch = (_: any) => {
    return { onChange: onChangeSearch };
  };

  const getCandidateVotingCenters = async (id: string) => {
    setVotingCenters(undefined);
    try {
      const res = await generalService.getCandidateVotingCenters(id);
      setVotingCenters(res.candidateVotingCenters);
      if (res.candidateVotingCenters.length == 0) {
        alert("Sin datos");
        return;
      }
      ExcelUtils.download(
        parseByColumns(res.candidateVotingCenters, votingCentersColumns),
        "centros",
      );
    } catch (error) {
      setVotingCenters([]);
      alert("Ups ocurrio un error al obtener los centros de votación");
    }
  };

  const getCandidates = async () => {
    setCandidates(undefined);
    try {
      const value = query.current;
      console.log("getCandidates.value:", value);
      const res = await generalService.getCandidates(query.current);
      setCandidates(res.candidates.data);
    } catch (error) {
      alert("Ups ocurrio un error al obtener los centros de votación");
    }
  };

  const downloadLocation = () => {
    ExcelUtils.download(EMPTY_LOCATION, "ubicacion");
  };

  const loadLocations = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    const data = await ExcelUtils.toJson(file);
    const columns = locationColumns.slice(0, -1);
    if (data.length == 0) {
      alert("Archivo sin datos");
      return;
    }
    console.log("columns", columns, data[0]);
    if (columns.some((item) => !data[0][item.headerName])) {
      alert("Formato inválido");
      return;
    }
    setUploadLocation({
      open: true,
      data: data.map((item) => {
        const newObj: any = {};
        columns.forEach((column) => {
          newObj[column.field] = item[column.headerName];
        });
        return newObj;
      }) as any,
    });
  };

  const loadCenters = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    const data = await ExcelUtils.toJson(file);
    const columns = votingCentersColumns;
    if (data.length == 0) {
      alert("Archivo sin datos");
      return;
    }
    console.log("columns", columns, data[0]);
    if (columns.some((item) => !data[0][item.headerName])) {
      alert("Formato inválido");
      return;
    }
    setUploadCenter({
      open: true,
      data: data.map((item) => {
        const newObj: any = {};
        columns.forEach((column) => {
          newObj[column.field] = item[column.headerName];
        });
        return newObj;
      }) as any,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SimpleCard>
          <div className="candidates-textlabel">
            <FontAwesomeIcon icon={faUsers} />
            <span>Total Candidatos</span>
          </div>
          <h2 className="candidates-value">{candidates?.length ?? "---"}</h2>
        </SimpleCard>
        <SimpleCard>
          <div className="candidates-textlabel">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Ubicaciones Geográficas</span>
          </div>
          <p className="candidates-label">País, estado, municipio/Parroquia</p>
          <div className="flex gap-2 flex-wrap mt-4">
            <Button
              color="text"
              onClick={() => fileLocationRef.current?.click()}
            >
              <FontAwesomeIcon icon={faUpload} />
              Subir Excel
            </Button>
            <input
              type="file"
              ref={fileLocationRef}
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
              style={{ display: "none" }}
              onChange={loadLocations}
            />
            <Button color="text" onClick={() => downloadLocation()}>
              <FontAwesomeIcon icon={faUpload} />
              Plantilla
            </Button>
            <Button color="text" onClick={() => setListLocation(true)}>
              <FontAwesomeIcon icon={faList} />
              Ver listado
            </Button>
            <Button
              color="text"
              onClick={() => setSaveLocation({ open: true, data: undefined })}
            >
              <FontAwesomeIcon icon={faAdd} />
              Agregar
            </Button>
          </div>
        </SimpleCard>
      </div>
      <div className="flex gap-2 items-start my-4">
        <InputText
          myClass="candidates-input-search"
          label="Buscar candidato, correo o centro..."
          name="search"
          register={registerSearch as any}
          dark={true}
          errors={{}}
        />
        <Button
          myClass="mt-5"
          color="text"
          icon={true}
          onClick={() => getCandidates()}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
      <DataTable
        columns={candidateColumns}
        rows={candidates}
        customColumns={{
          actions: (item) => (
            <div className="flex gap-1">
              <Button
                color="text"
                icon={true}
                onClick={() => getCandidateVotingCenters(item.id)}
                disabled={!votingCenters}
              >
                <FontAwesomeIcon icon={faFile} />
              </Button>
              <input
                type="file"
                ref={fileCenterRef}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                style={{ display: "none" }}
                onChange={loadCenters}
              />
              <Button
                color="text"
                icon={true}
                disabled={!votingCenters}
                onClick={() => fileCenterRef.current?.click()}
              >
                <FontAwesomeIcon icon={faUpload} />
              </Button>
            </div>
          ),
        }}
      />
      <SaveLocationDialog
        open={saveLocation.open}
        data={saveLocation.data}
        onClose={() => setSaveLocation({ ...saveLocation, open: false })}
      />
      <ListLocationDialog
        open={listLocation}
        onClose={() => setListLocation(false)}
        onEdit={(value) => {
          setSaveLocation({ open: true, data: { country: "Vo" } as any });
        }}
      />
      <UploadLocationDialog
        open={uploadLocation.open}
        data={uploadLocation.data}
        onClose={() => setUploadLocation({ ...saveLocation, open: false })}
      />
      <UploadCenterDialog
        open={uploadCenter.open}
        data={uploadCenter.data}
        onClose={() => setUploadCenter({ ...saveLocation, open: false })}
      />
    </>
  );
}
