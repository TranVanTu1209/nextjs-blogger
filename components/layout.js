import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children, home }) => {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <link rel='stylesheet' href='favicon.ico' />
        <meta name='description' content='Build a blog app with nextjs' />
        <meta name='og:title' content='Read blog together' />
      </Head>
      <main>{children}</main>
      {!home && (
        <Link href='/'>
          <a>Back Home</a>
        </Link>
      )}
    </div>
  );
};
export default layout;
