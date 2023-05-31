/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { getTableById, getTableList } from "@/lib/microcms";

import { GetServerSideProps, NextPage } from "next";
import { BaseMicroCMSApiSingleDataType, SateiPageContentType } from "@/types";

import parser, { domToReact } from "html-react-parser";
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

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getTableById("ik9hciusz");
  return { props: { data, directory: "satei" } };
};
