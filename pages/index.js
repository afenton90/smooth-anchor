import React, { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'reactbulma/lib/components/Hero/Hero';
import Image from 'reactbulma/lib/components/Image/Image';
import Container from 'reactbulma/lib/components/Container/Container';

const chevronStyle = { 'font-size': '7rem' };

const SmoothHero = () => (
  <Hero fullheight dark>
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
