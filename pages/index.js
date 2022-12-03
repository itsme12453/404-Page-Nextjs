import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h4>404 not found</h4>
      </div>

      <div className="content">
        <img width="35%" src="https://i.imgur.com/Kan06Og.png" />
        <div id="flex-text">
          <h1>I have bad news for you</h1>
          <div id="paragraph">
            The page you are looking for might be removed or is temporarily
            unavailable
          </div>
          <button>Back To Home</button>
        </div>
      </div>
    </div>
  );
}
