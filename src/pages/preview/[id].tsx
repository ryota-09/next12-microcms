/* eslint-disable jsx-a11y/alt-text */
import { RichEditorFactory } from "@/components/RichEditorUiParts/RichEditorFactory";
import {
  BaseMicroCMSApiSingleDataType,
  SateiPageDataType,
  _PreviewData,
} from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import parser from "html-react-parser";

type PropsType = {
  isPreviewMode: boolean;
  content: BaseMicroCMSApiSingleDataType<SateiPageDataType>;
  directory: string;
};

const Home: NextPage<PropsType> = ({ isPreviewMode, content, directory }) => {
  if (!content) return <p>エラーページ</p>;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1024px] mx-auto mt-[100px]">
        <div className="text-[40px] text-red-500">isPreviewMode: {JSON.stringify(isPreviewMode)}</div>
        <div className="text-[40px] text-blue-500">directory: {JSON.stringify(directory)}</div>
        <h1>タイトル: {content.title}</h1>
        <h2 className="text-[40px]">更新日: {content.updatedAt}</h2>
        <hr />
        {content.repeatTable &&
          content.repeatTable.map((content, index) => (
            <div key={index}>
              <b>repeatTableエリア</b>
              <div>{parser(content.table)}</div>
            </div>
          ))}
        <hr />
        {content.newedhitor && (
          <RichEditorFactory directory={directory} html={content.newedhitor} />
        )}
        <hr />
        {content.repeatTable2 &&
          content.repeatTable2.map((content, index) => (
            <div key={index}>
              <b>repeatTable2のエリア</b>
              {"title" in content && (
                <div>
                  <div>画像とタイトルのエリア</div>
                  <div>{content.title}</div>
                  <div>
                    <Image
                      src={content.image.url}
                      width={content.image.width}
                      height={content.image.height}
                    />
                  </div>
                </div>
              )}
              {"richeditor" in content && (
                <div>
                  <div>画像とタイトルのエリア</div>
                  <RichEditorFactory
                    html={content.richeditor}
                    directory={directory}
                  />
                </div>
              )}
            </div>
          ))}
      </main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const isPreviewMode = context.preview;
  if (!isPreviewMode) return { notFound: true };
  const contentId = context.params?.id;
  const previewData: any = context.previewData;
  const draftKey = previewData.draftKey;
  const directory = previewData.directory;
  const content = await fetch(
    `https://${
      process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN
    }.microcms.io/api/v1/tables/${contentId}/${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ""
    }`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
      },
    }
  ).then((res) => res.json());

  return {
    props: {
      isPreviewMode,
      directory,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (req) => {
  let paramList = [];
  const contents = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/tables`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
      },
    }
  ).then((res) => res.json());

  for (const item of contents.contents) {
    paramList.push({
      params: {
        id: item.id,
      },
    });
  }

  return {
    paths: [...paramList],
    fallback: false,
  };
};
