import { TableColums } from "@/app/components/datatable/DataTable";
import { Candidate } from "@/app/models/candidates_data";

export const candidateColumns: TableColums<Candidate> = [
  {
    field: "fullName",
    headerName: "Candidato",
  },
  {
    field: "email",
    headerName: "Correo",
  },
  {
    field: "votingCenter",
    headerName: "Centro de votación",
  },
  {
    field: "state",
    headerName: "Estado",
    valueFormatter: ({ address }) => address.state,
  },
  {
    field: "city",
    headerName: "Municipio",
    valueFormatter: ({ address }) => address.city ?? "---",
  },
  {
    field: "actions",
    headerName: "Acciones",
  },
];

export const locationColumns: TableColums = [
  {
    field: "country",
    headerName: "País",
  },
  {
    field: "state",
    headerName: "Estado",
  },
  {
    field: "municipality",
    headerName: "Municipio / Parroquia",
  },
  {
    field: "actions",
    headerName: "Acciones",
  },
];
