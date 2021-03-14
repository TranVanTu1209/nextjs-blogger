import Layout from "../../components/layout";
import { getPostData, getPostIds } from "../../lib/posts";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title> {postData.title} </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1> {postData.title} </h1>
        <h3> Author: {postData.userId} </h3>
        <p> {postData.body} </p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
