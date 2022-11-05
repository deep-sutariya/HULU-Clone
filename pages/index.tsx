import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav';
import Result from '../components/Results'
import requests from '../utils/requests';

// client
export default function Home(props) {
  // console.log(props);

  return (
    <div>

      <Head>
        <title>Deep's Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Nav />

      <Result results={props.results}/>

    </div>
  );
}

// server(execute first)
// fetch url user come with..
export async function getServerSideProps(context) {
  // console.log(context);
  // console.log(context.query.genre);
  const genre = context.query.genre; //FetchTopRated...

  const request = await fetch(`https://api.themoviedb.org/3/${ requests[genre]?.url}`).then((res) => res.json()); //Fetch..

  return{
    props: {
      results: request.results,
    },
  };

}