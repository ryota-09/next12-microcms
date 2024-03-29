/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { getTableById, getTableList } from "@/lib/microcms";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BaseMicroCMSApiSingleDataType, SateiPageContentType } from "@/types";

import parser from "html-react-parser";
import { RichEditorFactory } from "@/components/RichEditorUiParts/RichEditorFactory";
import Image from "next/image";

type PropsType = {
  data: BaseMicroCMSApiSingleDataType<SateiPageContentType>;
  directory: string;
};

const Home: NextPage<PropsType> = ({ data, directory }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[1024px] mx-auto mt-[100px]">
        <h1>タイトル: {data.title}</h1>
        <h2 className="text-[40px]">更新日: {data.updatedAt}</h2>
        <hr />
        <div className="bg-gray-200 w-full p-5">
          <div className="text-green-500 mb-4">目次</div>
          <ol className="grid grid-cols-2 gap-4">
            <li className="border-y-2 border-gray-500 p-2 flex justify-between items-center">
              <span className="block border-l-4 border-green-500 pl-4">
                見出し
              </span>
              <span className="block w-3 h-3 border-b-2 border-r-2 border-green-500 transform rotate-45" />
            </li>
            <li className="border-y-2 border-gray-500 p-2 flex justify-between items-center">
              <span className="block border-l-4 border-green-500 pl-4">
                見出し
              </span>
              <span className="block w-3 h-3 border-b-2 border-r-2 border-green-500 transform rotate-45" />
            </li>
            <li className="border-y-2 border-gray-500 p-2 flex justify-between items-center">
              <span className="block border-l-4 border-green-500 pl-4">
                見出し
              </span>
              <span className="block w-3 h-3 border-b-2 border-r-2 border-green-500 transform rotate-45" />
            </li>
            <li className="border-y-2 border-gray-500 p-2 flex justify-between items-center">
              <span className="block border-l-4 border-green-500 pl-4">
                見出し
              </span>
              <span className="block w-3 h-3 border-b-2 border-r-2 border-green-500 transform rotate-45" />
            </li>
          </ol>
        </div>
        <hr />
        <div>
          <div className="h-10 w-32 bg-orange-500 flex justify-center items-center rounded-full text-white">
            POINT
          </div>
        </div>
        <hr />
        <div className="h-24 before:border-l-2 before:border-dotted before:border-l-[#40b2b8] before:h-24 before:absolute before:left-0 before:top-[6px] before:bottom-auto before:w-[2px] after:border-l-2 after:border-dotted after:border-l-[#40b2b8] after:h-24 after:absolute after:left-[2px] after:top-[4px] after:w-[2px] relative w-[100%]">
          ガイド
        </div>
        <hr />
        <span className="block flex justify-center items-center w-24 h-24 bg-orange-500 text-[80px] text-white rounded-full">
          ?
        </span>
        <hr />
        <div className="flex items-center">
          <div className="w-56 h-64 border-2">
            <div className="relative my-8 pb-4 mx-auto w-24 text-center before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-0 before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[2px] after:w-[100%]">
              子見出し
            </div>
            <div className="h-2/3 m-8">
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
          <div className="w-[50px] h-[100px] mx-8 inline-block border-right-0 border-t-[50px] border-b-[50px] border-l-[50px] border-transparent border-l-green-500" />
          <div className="w-56 h-64 border-2">
            <div className="relative my-8 pb-4 mx-auto w-24 text-center before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-0 before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[2px] after:w-[100%]">
              子見出し
            </div>
            <div className="h-2/3 m-8">
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
          <div className="w-[50px] h-[100px] mx-8 inline-block border-right-0 border-t-[50px] border-b-[50px] border-l-[50px] border-transparent border-l-green-500" />
          <div className="w-56 h-64 border-2">
            <div className="relative my-8 pb-4 mx-auto w-24 text-center before:border-b-2 before:border-dotted before:border-b-[#40b2b8] before:h-2 before:absolute before:right-0 before:right-[2px] before:bottom-0 before:w-[100%] after:border-b-2 after:border-dotted after:border-b-[#40b2b8] after:h-2 after:absolute after:right-0 after:bottom-[2px] after:w-[100%]">
              子見出し
            </div>
            <div className="h-2/3 m-8">
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="relative">
            <Image
              src="/cup-of-coffee-1280537_1280.jpg"
              width="400"
              height="300"
              className="block"
            />
            <div className="absolute flex bottom-0 left-0 h-32 w-[400px]">
              <div className="w-1/3 bg-yellow-500">aaaa</div>
              <div className="w-2/3 bg-gray-200 opacity-50">aaaa</div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="bg-orange-200 w-56 h-32" />
          <div className="relative before:absolute before:top-[-15px] before:right-3 before:content-['1'] before:block before:w-8 before:h-8 before:bg-orange-500 before:rounded-full before:text-white before:flex before:justify-center before:items-center bg-gray-200 w-56 h-32 p-4">
            テキストテキストテキストテキストテキストテキストテキスト
          </div>
        </div>
        <hr />
        {data.repeatTable &&
          data.repeatTable.map((content, index) => (
            <div key={index}>
              <b>repeatTableエリア</b>
              <div>{parser(content.table)}</div>
            </div>
          ))}
        <hr />
        {data.newedhitor && (
          <RichEditorFactory directory={directory} html={data.newedhitor} />
        )}
        <hr />
        {data.repeatTable2 &&
          data.repeatTable2.map((content, index) => (
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
  const contentId = !Array.isArray(context.params?.id)
    ? context.params?.id
    : "";

  const data = await getTableById(contentId ?? "ik9hciusz");
  return { props: { data, directory: "shaken" } };
};
export const getStaticPaths: GetStaticPaths = async (req) => {
  let paramList = [];
  // const contents = await fetch(
  //   `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/tables`,
  //   {
  //     headers: {
  //       "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
  //     },
  //   }
  // ).then((res) => res.json());
  const contents = await getTableList()
  
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
