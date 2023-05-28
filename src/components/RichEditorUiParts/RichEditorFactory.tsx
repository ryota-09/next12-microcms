import { FC } from "react";
import parser from "html-react-parser";
import { replaceForSatei, replaceForShaken } from "../richEditorUiParts.lib";

type PropsType = {
  directory: string;
  html: string;
};

export const RichEditorFactory: FC<PropsType> = ({ html, directory }) => {
  switch (directory) {
    case "satei":
      return <>{parser(html, { replace: replaceForSatei })}</>;
    case "shaken":
      return <>{parser(html, { replace: replaceForShaken })}</>;
    default:
      return <>{parser(html)}</>;
  }
};
