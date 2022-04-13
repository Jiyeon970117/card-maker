import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'
const Maker = ({authService}) => {
  const [cards,setCards] = useState([
    {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'wldusdl246@naver.com',
      message: 'go for it',
      fileName: 'jiyeon',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Ellie2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'wldusdl246@naver.com',
      message: 'go for it',
      fileName: 'jiyeon',
      fileURL: 'ellie.png',

    },
    {
      id: '3',
      name: 'Ellie3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'wldusdl246@naver.com',
      message: 'go for it',
      fileName: 'jiyeon',
      fileURL: null,
    },
  ]);
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout();
  }
  
  useEffect( () => {
      authService.onAuthChange( (user) => {
        if(!user){
          navigate('/');
        }
      })
  })
  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
};

export default Maker;