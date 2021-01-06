import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`

const Afterword = styled.div`
  hr {
   /* margin-top: 64px; */
  }
  p {
    margin: 0;
  }

  h3 {
    margin-bottom: 12px;
  }

  br{
    margin-bottom: 16px;
  }
  #links-header {
    margin-bottom: 8px;
  }
  .links {
    margin: 0;
  }
`

const About = () => {
  return (
    <div>
      <Main>
        <h1>About</h1>
        <p>This is essentially a website to create your own daily/discover mixes.</p>

        <p>It lets you call on the recommendation engine that Spotify uses to create its recommendations (think daily mixes or song radio), but with far more control that you'd usually have. Don't expect perfect playlists or anything, but it is a fantastic resource for music discovery if you use it in the right way.</p>

        {/* <p><i>So how to use it then?</i></p> */}
        {/* <p>One way to use this site...</p> */}
      </Main>

      <Afterword>
        <hr />
        <h3><i>More Resources</i></h3>
        <p id="links-header">If you're interested, other Spotify-based sites that I've written can be found at:</p>
        <p className="links"><a target="_blank" rel="noopener noreferrer" href="https://spotify-metadata.netlify.app/">
          Spotify Metadata
        </a>, a site for checking out your listening habits, and</p>
        <p className="links"><a target="_blank" rel="noopener noreferrer" href="https://mix-master.netlify.app/">
          Mix Master
        </a>, a site to help you build better playlists and mixes.</p>

        <br/>

        <p>Another great site to check out is one called <a target="_blank" rel="noopener noreferrer" href="http://everynoise.com/"><i>Every Noise</i></a>. This is a fantastic site written and maintained by one of the legends behind the data classifications that are used on this site, <i>Glenn Mcdonald</i>. It is an organised genre map of all the different genres available on Spotify, each with its own related artist map and algorithmically generated playlists.</p>
        <p>Well worth checking out if you have the time.</p>

       <hr /><br/>

        <p className="afterword">Happy Digging, Stay Safe,</p>
        <p>and <i>Enjoy the Music</i>.</p>

      </ Afterword>
    </div>
  )
};

export default About;
