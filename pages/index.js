import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getPosts } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>This is blog app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Hello , I am Tu</h1>
        <p>I am a web developer</p>
      </main>
      <section>
        <h2>Blog List</h2>
        {allPostsData.map(({ id, title }) => (
          <div className='blog-item' key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <h5>{title}</h5>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
