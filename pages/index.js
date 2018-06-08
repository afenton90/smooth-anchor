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
              src="/static/anchor-shape.svg"
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
