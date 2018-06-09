import React, { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'reactbulma/lib/components/Hero/Hero';
import Image from 'reactbulma/lib/components/Image/Image';
import Container from 'reactbulma/lib/components/Container/Container';

const chevronStyle = { 'font-size': '7rem' };

const GithubIcon = () => (
  <svg
    aria-labelledby="simpleicons-github-icon"
    role="img"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="simpleicons-github-icon">GitHub icon</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const SmoothHero = () => (
  <Hero fullheight dark>
    <Hero.Head>
      <style jsx>{`
        .navbar {
          justify-content: flex-end;
          align-items: stretch;
          display: flex;
          min-height: 3.25rem;
        }

        .navbar-item {
          fill: white;
          display: flex;
          align-items: center;
        }
      `}</style>
      <nav className="navbar" aria-label="main navigation">
        <a
          className="navbar-item"
          href="https://github.com/afenton90/smooth-anchor"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </nav>
    </Hero.Head>
    <Hero.Body>
      <Container>
        <div className="columns is-mobile">
          <div className="column is-one-fifth is-offset-two-fifths">
            <Image
              src="/smooth-anchor/static/anchor-shape.svg"
              alt="Smooth anchor logo"
              square
            />
          </div>
        </div>
        <div className="has-text-centered">
          <h1 className="title is-2">Smooth. Accessible. Scrolling.</h1>
        </div>
      </Container>
    </Hero.Body>
    <Hero.Foot className="has-text-centered">
      <div className="animated infinite bounce">
        <a href="#section2" style={chevronStyle}>
          &#x2C5;
        </a>
      </div>
    </Hero.Foot>
  </Hero>
);

const Hero2 = () => (
  <Hero fullheight info id="section2">
    <Hero.Body>
      <Container>
        <div className="has-text-centered">
          <h2 className="title is-2">Section 2</h2>
        </div>
      </Container>
    </Hero.Body>
    <Hero.Foot className="has-text-centered">
      <div className="animated infinite bounce">
        <a
          href="#section3"
          className="animated infinite bounce"
          style={chevronStyle}
        >
          &#x2C5;
        </a>
      </div>
    </Hero.Foot>
  </Hero>
);

const Hero3 = () => (
  <Hero fullheight primary id="section3">
    <Hero.Body>
      <Container>
        <div className="has-text-centered">
          <h2 className="title is-2">Section 3</h2>
        </div>
      </Container>
    </Hero.Body>
  </Hero>
);

export default () => (
  <Fragment>
    <Head>
      <title>smooth-anchor | smoothly anchoring</title>
      <meta
        name="description"
        content="smooth-anchor polyfill for smooth scrolling web pages"
      />
      <meta
        name="keywords"
        content="smooth scrolling, polyfill, anchors, smooth links"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/smooth-anchor/static/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/smooth-anchor/static/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/smooth-anchor/static/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/smooth-anchor/static/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/smooth-anchor/static/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/smooth-anchor/static/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/smooth-anchor/static/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/smooth-anchor/static/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/smooth-anchor/static/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/smooth-anchor/static/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/smooth-anchor/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/smooth-anchor/static/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/smooth-anchor/static/favicon-16x16.png"
      />
      <meta name="robots" content="noarchive" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Head>
    <SmoothHero />
    <Hero2 />
    <Hero3 />
  </Fragment>
);
