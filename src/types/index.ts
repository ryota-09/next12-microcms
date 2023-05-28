import { MicroCMSDate, MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";

const endPointList = ["tables", "blogs"] as const;

export type EndPointLiteralType = (typeof endPointList)[number];

type MicroCMSFields = Readonly<{
  text: string;
  number: number;
  richEditor: string;
  image: MicroCMSImage;
  date: MicroCMSDate;
}>;

export type BaseMicroCMSApiSingleDataType<T> = {
  id: string;
  createdAt: string;
  updatedAt: string;
} & T;

export type BaseMicroCMSApiListDataType<T> = {
  contents: T[];
  createdAt: string;
  updatedAt: string;
  totalCount: number;
  offset: number;
  limit: number;
};

type TextAreaWithImageType = {
  fieldId: string;
  title: MicroCMSFields["text"];
  imgae: MicroCMSFields["image"];
};

type RichEditorWithTitleType = {
  fieldId: string;
  richeditor: MicroCMSFields["richEditor"];
};

type TableType = {
  fieldId: string;
  table: string;
};

export type SateiPageDataType = {
  title: MicroCMSFields["text"];
  table: MicroCMSFields["text"];
  repeatTable: TableType[];
  newedhitor: MicroCMSFields["richEditor"];
  repeatTable2: (TextAreaWithImageType | RichEditorWithTitleType)[];
};

export type GetListHandler = <T>(
  endPoint: EndPointLiteralType,
  queries?: MicroCMSQueries
) => Promise<T>;
export type GetSingleHandler = <T>(
  endPoint: EndPointLiteralType,
  contentId: string,
  queries?: MicroCMSQueries
) => Promise<T>;
