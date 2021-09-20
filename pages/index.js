import { client } from "../libs/client";
import Link from "next/link";
import Image from 'next/image'
import Header from './header';
import styles from '../styles/Home.module.css';

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
              <img className="card-img img-responsive" src={'/static/S__6225935.jpg'} />
              <div className="card-img-overlay">
                <div className={styles.TopText}>
                  <p className="text-white">こんなところで</p>
                  <p className="text-white">立ち止まっていられない</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ImgContainer}>
          <img src="/static/S__6225945.jpg" alt="" />
          <p>　もっとやりたいことがあるのに<br />そんな簡単に進路なんて変えられない<br />
            <br /><br />　　　　　　　　　　大学に行くのが辛い。</p>
          <p></p>
        </div>
        <div className={styles.ImgContainer}>
          <img src="/static/S__6225930.jpg" alt="" />
          <p>　　自分にはむいていない。そう思った。<br />
            でも、やめたら<br />
            ここまで頑張ってきた努力が無駄になるのかな。</p>
        </div>
        <div className={styles.ImgContainer}>
          <img src="/static/S__6225932.jpg" alt="" />
          <p>あれ、俺こんなことしたかったんだっけ。</p>
        </div>
        <div className={styles.ImgContainer}>
          <img src="/static/S__6225944.jpg" alt="" />
          <p>nanariとは
            <br />Nanariは、大学で自分の夢を見失ってしまった学生
            <br />人間関係がこじれて大学にいけなくなってしまった学生<br />
            <br />自分のゆありたいことがみつかったのに
            <br />大学生活に追われて動きが取れない学生<br />
            <br />今の環境が自分に向いてないと気がついたのに、
            <br />これまでの積み上げを無駄にするのが怖かったり
            <br />経済状況が理由で
            <br />なかなか環境を変えることができない学生が
            <br />未来に向かって一歩を踏み出せるように支援をする団体です。<br />
            <br />私たちは、自信をなくしている
            <br />あなたの才能、魅力を必ず伸ばせる自信があります。
          </p>
        </div>

      </div >
      {/*ブログ表示↓*/}
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a><img src={blog.image.url} alt="" /></a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*ブログ表示↑*/}

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
