import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Blog, getList } from "@/lib/microcms";

import { serialize } from "next-mdx-remote/serialize";
import { GetServerSideProps } from "next";
import { MDXRemote } from "next-mdx-remote";

export default function Home({ source }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  async function fetchBlogs() {
    const { contents } = await getList();
    setBlogs(contents);
  }

  const getContent = async () => {
    const mdxSource = await serialize(
      blogs[0].content
      // `<h2>ブログテンプレートから作成されました</h2>`
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Next12</h1>
        <button onClick={fetchBlogs}>フェッチボタン</button>
        <button onClick={fetchBlogs}>シリアライズボタン</button>
        {blogs && blogs.map((blog) => <li key={blog.id}>{blog.title}</li>)}
        <MDXRemote {...source} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { contents } = await getList();
  // MDX text - can be from a local file, database, anywhere
  const mdxSource = await serialize(contents[1].content.replaceAll("<br>", ""));
  return { props: { source: mdxSource } };
};