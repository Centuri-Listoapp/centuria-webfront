import { UseFormRegister } from "react-hook-form";

export interface Option {
  label: string;
  value: any;
  data?: any;
}

export type Props = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: Record<any, any>;
  options?: Option[];
};

export default function InputSelect(props: Props) {
  return (
    <div className="mb-2">
      <label
        htmlFor="price"
        className="block text-sm/6 font-medium text-gray-900 label-secondary"
      >
        {props.label} {props.options ? "" : "(Cargando...)"}
      </label>
      <select
        style={{ fontSize: "14px" }}
        defaultValue={""}
        className="block w-full rounded-md bg-white pl-3 pr-3 pt-2 pb-2 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cyan-800"
        {...props.register(props.name)}
      >
        <option style={{ color: "gray" }} value="" disabled>
          Seleccione
        </option>
        {props.options?.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <p className="input-error">{props.errors[props.name]?.message}</p>
    </div>
  );
}
