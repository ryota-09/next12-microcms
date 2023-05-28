import { DOMNode, Element, domToReact } from "html-react-parser";
import SateiH2 from "./RichEditorUiParts/CustomH2/SateiH2";
import ShakenH2 from "./RichEditorUiParts/CustomH2/ShakenH2";

const isDOMElement = (node: DOMNode): node is Element => {
  return (node as Element).name !== undefined;
};

export const replaceForSatei: (
  domNode: DOMNode
) => false | void | object | JSX.Element | null | undefined = (
  node: DOMNode
) => {
  if (isDOMElement(node) && node.name === "h2") {
    return <SateiH2 {...node.attribs}>{domToReact(node.children)}</SateiH2>;
  }
};

export const replaceForShaken: (
  domNode: DOMNode
) => false | void | object | JSX.Element | null | undefined = (
  node: DOMNode
) => {
  if (isDOMElement(node) && node.name === "h2") {
    return <ShakenH2 {...node.attribs}>{domToReact(node.children)}</ShakenH2>;
  }
};
