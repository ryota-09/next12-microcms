import { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const ShakenH2: FC<PropsType> = ({ children }) => {
  return (
    <h2 className="border-b-[10px] border-solid border-dotted border-blue-500 text-[30px]">
      {children}
    </h2>
  );
};
export default ShakenH2;
