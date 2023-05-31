import {
  BaseMicroCMSApiListDataType,
  BaseMicroCMSApiSingleDataType,
  EndPointLiteralType,
  GetListHandler,
  GetSingleHandler,
  SateiPageContentType,
} from "@/types";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

const baseMicroCMSApiGetListHandler: GetListHandler = <T>(
  endpoint: EndPointLiteralType,
  queries?: MicroCMSQueries
): Promise<T> => {
  return client.get<T>({ endpoint, queries });
};

const baseMicroCMSApiGetHandlerByContentId: GetSingleHandler = <T>(
  endpoint: EndPointLiteralType,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<T> => {
  return client.get<T>({ endpoint, contentId, queries });
};

export const getTableList = (querys?: MicroCMSQueries) =>
  baseMicroCMSApiGetListHandler<BaseMicroCMSApiListDataType<SateiPageContentType>>(
    "tables",
    querys
  );

export const getTableById = (contentId: string, querys?: MicroCMSQueries) =>
  baseMicroCMSApiGetHandlerByContentId<
    BaseMicroCMSApiSingleDataType<SateiPageContentType>
  >("tables", contentId, querys);

