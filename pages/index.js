import { useState, useEffect } from 'react';

import Header from './header';
import Footer from './Footer'

import firebase from 'firebase';
import '../components/fire';


import { client } from "../libs/client";
import Link from "next/link";
import Image from 'next/image';

import styles from '../styles/Home.module.css';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default function Home({ blog }) {
  {/* 認証↓ */ }
  {/*const [message, setMessage] = useState('wait...')

  useEffect(() => {
    auth.signInWithPopup(provider).then(result => {
      setMessage('logined: ' + result.user.displayName)
    })
  }, [])*/}
  {/* 認証↑ */ }
  return (
    <div className="container mt-3">
      <div className={styles.OverallNanari}>
        <Header />
        <style jsx>{`
        .card-img-overlay{
          padding: 0;
          top: 20%;
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
        <div className="row">
          <div className="col">
            <img src="/static/S__6225945.jpg" className={styles.gazo1} alt="" />
            <div >
              <br /><br /><p className={styles.bun1}>もっとやりたいことがあるのに</p>
              <p className={styles.bun1}>そんな簡単に進路なんて変えられない</p>
              <br /><p className={styles.bun2}>大学に行くのが辛い。</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-img img-responsive">
                <img src="/static/S__6225930.jpg" className={styles.gazo2} alt="" />
              </div>
              <div className="card-img-overlay">
                <p>自分には向いていない。そう思った。</p>
                <p>でも、やめたら</p>
                <p>ここまで頑張ってきた努力が無駄になるのかな。</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block1}>
          <img src="/static/S__6225932.jpg" className={styles.gazo3} alt="" />
          <p className={styles.bun3}>あれ、俺こんなことしたかったんだっけ。</p>
        </div>
        <div className="row">
          <div className="col">
            <p>nanariとは
              <br />Nanariは、大学で自分の夢を見失ってしまった学生
              <br />人間関係がこじれて大学にいけなくなってしまった学生<br />
              <br />自分のやりたいことがみつかったのに
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
          <div className="col">
            <img src="/static/S__6225944.jpg" className={styles.gazo4} alt="" />
          </div>
        </div>
      </div >
      {/*ブログ表示↓*/}
      <p className={styles.OurStory}>Our Story</p>
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

      {/* 認証↓ */}
      {/*<div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <p className="h6 text-left">
          uid: {auth.currentUser != null ? auth.currentUser.uid : ''}<br />
          displayName: {auth.currentUser != null ? auth.currentUser.displayName : ''}<br />
          email: {auth.currentUser != null ? auth.currentUser.email : ''}<br />
          phoneNumber: {auth.currentUser != null ? auth.currentUser.phoneNumber : ''}
        </p>
          </div>*/}
      {/* 認証↑ */}

      <Footer />
    </div >

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
