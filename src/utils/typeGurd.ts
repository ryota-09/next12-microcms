import { DOMNode, Element } from "html-react-parser";

export const isDOMElement = (domNode: DOMNode): domNode is Element => {
  return domNode instanceof Element
};
