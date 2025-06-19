import { UseFormRegister } from "react-hook-form";

export type Props = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
};

export default function InputText(props: Props) {
  return (
    <div className="mb-2">
      <label
        htmlFor="price"
        className="block text-sm/6 font-medium text-gray-900 label-secondary"
      >
        {props.label}
      </label>
      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cyan-800">
        <input
          type="text"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...props.register(props.name)}
        />
      </div>
      <p className="input-error">{props.errors[props.name]?.message}</p>
    </div>
  );
}
