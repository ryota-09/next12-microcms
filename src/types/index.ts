import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  MicroCMSListContent,
} from "microcms-js-sdk";

const ENDPOINT_LIST = ["tables", "blogs"] as const;

const CUSTOM_FIELD = {
  table: "table",
  leftColumn: "leftColumn",
  richeditor: "richeditor",
} as const;

type CustomFieldLiteralType = keyof typeof CUSTOM_FIELD;

export type EndPointLiteralType = (typeof ENDPOINT_LIST)[number];

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

export type BaseMicroCMSApiListDataType<T extends MicroCMSListContent> = {
  contents: T[];
  createdAt: string;
  updatedAt: string;
  totalCount: number;
  offset: number;
  limit: number;
};

type MicroCMSCustomFieldType<T extends CustomFieldLiteralType, U> = {
  fieldId: T;
} & U;

type TextAreaWithImageType = MicroCMSCustomFieldType<
  typeof CUSTOM_FIELD.leftColumn,
  {
    title: MicroCMSFields["text"];
    image: MicroCMSFields["image"];
  }
>;

type RichEditorWithTitleType = MicroCMSCustomFieldType<
  typeof CUSTOM_FIELD.richeditor,
  {
    richeditor: MicroCMSFields["richEditor"];
  }
>;

type TableType = MicroCMSCustomFieldType<
  typeof CUSTOM_FIELD.table,
  {
    table: string;
  }
>;

export type RepeatedFieldListType<
  T extends MicroCMSCustomFieldType<CustomFieldLiteralType, object>
> = T[];

type PageContentType<T> = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
} & T;

export type SateiPageContentType = PageContentType<{
  title: MicroCMSFields["text"];
  table: MicroCMSFields["text"];
  repeatTable: RepeatedFieldListType<TableType>;
  newedhitor: MicroCMSFields["richEditor"];
  repeatTable2: RepeatedFieldListType<
    TextAreaWithImageType | RichEditorWithTitleType
  >;
}>;

export type GetListHandler = <T>(
  endPoint: EndPointLiteralType,
  queries?: MicroCMSQueries
) => Promise<T>;
export type GetSingleHandler = <T>(
  endPoint: EndPointLiteralType,
  contentId: string,
  queries?: MicroCMSQueries
) => Promise<T>;

export type _PreviewData = {
  draftKey: string;
  directory: string;
};
