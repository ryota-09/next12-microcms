import { DOMNode, Element, domToReact } from "html-react-parser";
import CustomH2 from "./RichEditorUiParts/CustomH2/CustomH2";

const isDOMElement = (node: DOMNode): node is Element => {
  return (node as Element).name !== undefined;
};

export const replaceForSatei: (
  domNode: DOMNode
) => false | void | object | JSX.Element | null | undefined = (
  node: DOMNode
) => {
  if (isDOMElement(node) && node.name === "h2") {
    return <CustomH2 {...node.attribs}>{domToReact(node.children)}</CustomH2>;
  }
};
