import { TableColumns } from "@/app/components/datatable/DataTable";
import { Candidate } from "@/app/models/candidates_data";
import { CandidateVotingCenter } from "@/app/models/votingCenter";

export const candidateColumns: TableColumns<Candidate> = [
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
    valueFormatter: ({}) => "---",
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
    headerName: "Centros",
  },
];

export const votingCentersColumns: TableColumns<CandidateVotingCenter> = [
  {
    field: "name",
    headerName: "Nombre",
  },
  {
    field: "networkGoalCount",
    headerName: "Meta centro votación",
  },
  {
    field: "numberOfVoters",
    headerName: "Cantidad votantes",
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
    field: "latitude",
    headerName: "Latitude",
    valueFormatter: ({ address }) => address.coordinates?.latitude ?? "---",
  },
  {
    field: "longitude",
    headerName: "Longitude",
    valueFormatter: ({ address }) => address.coordinates?.longitude ?? "---",
  },
];

export const locationColumns: TableColumns = [
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
