import { UseFormRegisterReturn } from "react-hook-form";

interface ITextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  register?: UseFormRegisterReturn<string>;
  messageError?: string;
  classNameTextarea?: string;
  classNameError?: string;
  showError: boolean;
}

export default function Textarea({
  showError,
  messageError,
  classNameTextarea,
  classNameError,
  register,
  ...rest
}: ITextareaProps) {
  return (
    <div className="relative">
      <textarea
        className={`bg-blueDark border-l-2 border-b-2 border-gray py-1 px-4 rounded mb-6 w-full ${classNameTextarea}`}
        {...register}
        {...rest}
      ></textarea>
      {showError && (
        <p
          className={`text-red-500 text-xs absolute top-40 mt-[1px] ${classNameError}`}
        >
          {messageError}
        </p>
      )}
    </div>
  );
}
