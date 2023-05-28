import { FC, ReactNode } from "react";
import parse from "html-react-parser";

type PropsType = {
  children: ReactNode;
};

const CustomH2: FC<PropsType> = ({ children }) => {
  return <h2 className="border-b-[10px] border-green-300 text-[30px]">{children}</h2>;
};
export default CustomH2;
