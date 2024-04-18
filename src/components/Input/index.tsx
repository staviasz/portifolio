import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
  messageError?: string;
  classNameInput?: string;
  classNameError?: string;
  showError: boolean;
}
export default function Input(props: IInputProps) {
  const {
    classNameInput,
    classNameError,
    messageError,
    showError,
    register,
    ...rest
  } = props;
  return (
    <div className="relative">
      <input
        className={`bg-blueDark border-l-2 border-b-2 border-gray py-1 px-4 rounded mb-6 w-full ${classNameInput}`}
        {...register}
        {...rest}
      />
      {showError && (
        <p
          className={`text-red-500 text-xs absolute top-8 mt-[1px] ${classNameError}`}
        >
          {messageError}
        </p>
      )}
    </div>
  );
}
