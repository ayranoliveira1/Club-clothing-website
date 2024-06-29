const InputErrorMessage = ({ children }: { children: string }) => {
  return <div className="w-full text-sm text-red-500">{children}</div>;
};

export default InputErrorMessage;
