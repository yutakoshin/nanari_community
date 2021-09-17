import Header from './header'
import styles from '../styles/Home.module.css';
import { client } from "../libs/client";

import Blog from './blog'

export default function Home({ blog }) {
  return (
    <div className="container mt-3">
      <div className={styles.OverallNanari}>
        <Header />
        <style jsx>{`
        .card-img-overlay{
          padding: 0;
          top: 40%;
          left: 20%;
        }
      `}</style>
        <div className="row">
          <div className="col">
            <div className="card">
              <img className="card-img" src="/static/S__6045732.jpg" alt="" />
              <div className="card-img-overlay">
                <div className={styles.TopText}>
                  <p className="text-white">こんなところで</p>
                  <p className="text-white">立ち止まっていられない</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.PadNewInfomation}>
              <p className={styles.LetterNews}>NEWS</p>
              <p className={styles.LetterNewInfomation}>新着情報</p>
            </div>
          </div>
          <div className="col">
            <div className={styles.PadRenewal}>
              <p className={styles.LetterRenewal}>2021年　サイトをリニューアルしました</p>
            </div>
          </div>
        </div>
      </div >
      <Blog blog={blog}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
