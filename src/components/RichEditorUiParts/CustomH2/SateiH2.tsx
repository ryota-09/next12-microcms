import { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const SateiH2: FC<PropsType> = ({ children }) => {
  return (
    <h2 className="border-b-[10px] border-green-300 text-[30px]">{children}</h2>
  );
};
export default SateiH2;
