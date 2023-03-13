import React from 'react';
import Nav from '../Nav/Nav'//*need this for nav
import { Box, Typography } from '@mui/material';//*need this for nav
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function About() {
  return (
    <>
        <Box sx={{ borderRadius: '20px !important' }}>
            <Nav />
        </Box>
    <div className="container">
      <h3>Who are we?</h3>
      <ul>
        <li>
        At Enlifted, we are dedicated to transforming the world through the
        power of language. Our proven system empowers individuals to break free
        from self-imposed limitations and unlock their full potential by
        mastering their words. 
        </li>

        <li>
        With a team of highly-skilled coaches and
        leaders, we have helped countless individuals and organizations achieve
        unprecedented levels of success. Our approach is grounded in science and
        enriched by practical magic, ensuring that every client receives a
        comprehensive and personalized experience. 
        </li>

        <li>
        Whether you're a coach
        looking to enhance your skills, a business leader striving for greater
        success, or an individual seeking to break free from limiting beliefs,
        Enlifted has the tools and expertise to guide you towards your goals.
        Join our community today and discover the transformative power of
        language.
        </li>
      </ul>
    </div>
    </>
  );
}

export default About;
