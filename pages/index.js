import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import NavBar from '../src/componentes/navbar'
import List from '../src/componentes/list'

export default function Home({dados}) {
  return (
    <>
      <Head>
        <title>Desafio de Front-End</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <NavBar tipo="principal"/>
      <List dados={dados}/>
    </>
  )
}

Home.getInitialProps = async () =>{
  const response = await axios.get(
      'https://private-54fe53-pebmeddesafio.apiary-mock.com/contents'
  );

  return { dados:  response.data}
};