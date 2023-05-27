import { MicroCMSImage } from "microcms-js-sdk";

type MicroCMSFields = Readonly<{
  text: string;
  number: number;
  richEditor: string;
  image: MicroCMSImage;
}>;

export type BaseMicroCMSApiType<T> = {
  id: string;
  createdAt: string;
  updatedAt: string;
} & T;

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
