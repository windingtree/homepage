
import React from 'react';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';

const HacktravelProgram = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />

    <section className="short-banner-bg py-4 px-1">
      <h1 className="mt-4 text-center text-white">#HackTravel London 2019 Program</h1>
    </section>

    <div className="container py-md-4 px-md-4 px-1 py-4">
      <h2>WHERE</h2>
      <div>
        <b>Venue:</b>
        {' '}
        ExCeL London
      </div>
      <div>
        <b>Address:</b>
        {' '}
        Royal Victoria Dock, 1 Western Gateway, Royal Docks, London E16 1XL
      </div>
      <div>
        <b>Website:</b>
        <a href="https://www.excel.london/"> https://www.excel.london/ </a>
      </div>


      <h2 className="pt-2">WHAT & WHEN</h2>
      <h3 className="pt-1">November 4, 2019</h3>
      <div>
        <b>8:00am:</b>
        {' '}
Doors open
      </div>

      <div>
        <b>10:00am:</b>
        {' '}
        Registration, Breakfast & Coffee
      </div>


      <div>
        <b>10:30pm:</b>
        Main Program Talks
        {' '}
kick off
        <ul>
          <li>Welcome Note</li>
          <li>Special Announcement from Winding Tree Team</li>
          <li>Introduction to Hackathon Challenges, Rules & Submission Process</li>
        </ul>
      </div>
      <div>
        <b>1:30pm:</b>
        {' '}
        Lunch, Networking / Team Forming
      </div>

      <div>
        <b>2:00pm:</b>
        Technical Hackathon Kicks Off:
        {' '}
kick off
        <ul>
          <li>Winding Tree Platform Onboarding Demos</li>
          <li>Team Forming</li>
        </ul>
      </div>

      <div>
        <b>2:30pm:</b>
        {' '}
        Hacking Continues
      </div>

      <div>
        <b>6:00pm:</b>
        {' '}
Happy Hour & Getting to know each other
      </div>
      <div>
        <b>7:00pm:</b>
        {' '}
        Doors close
      </div>

      <div>
        <b>NB: Please bring noise cancelling headphones as we are going to be surrounded by the crowd!</b>
      </div>

      <h3 className="pt-2">November 5, 2019</h3>
      <div>
        <b>9:00am:</b>
        {' '}
Doors open & Registration, Breakfast & Coffee
      </div>
      <div>
        <b>9:30am:</b>
        {' '}
        {' '}
Hacking Continues
      </div>
      <div>
        <b>11:00am:</b>
        {' '}
        Workshop by Makoto Inoue, Founder of Matoken Limited, on
“How to use Ethereum+IPFS+ENS to make decentralised website”
      </div>

      <div>
        <b>12:00pm:</b>
        {' '}
        {' '}
Time for Q&A
      </div>

      <div>
        <b>12:30pm:</b>
        {' '}
        Lunch & Networking
      </div>

      <div>
        <b>1:30pm:</b>
        {' '}
        Workshop on: Overcoming the fear of development on Blockchain

      </div>

      <div>
        <b>3:00pm:</b>
        {' '}
        Coffee & snacks break
      </div>

      <div>
        <b>3:30pm:</b>
        {' '}
        Ask Me Anything session with Winding Tree team // Hacking Continues
      </div>

      <div>
        <b>6:00pm:</b>
        {' '}
        Doors close
      </div>


      <h3 className="pt-2">November 6, 2019</h3>
      <div>
        <b>9:00am:</b>
        {' '}
        Doors open & Breakfast & Coffee
      </div>
      <div>
        <b>9:30pm:</b>
        {' '}
Hacking Continues
      </div>

      <div>
        <b>12:00pm:</b>
        {' '}
Lunch & Networking
      </div>

      <div>
        <b>1:30pm:</b>
        {' '}
Hacking stops & submissions
      </div>
      <div>
        <b>2:00-4:00pm:</b>
        {' '}
Hack Pitching starts
      </div>
      <div>
        <b>4:00</b>
        {' '}
        Happy Hour & Pitch Judging + Hacker Awards
      </div>
      <div>
        <b>6:00pm:</b>
        {' '}
        Doors close
      </div>
      {' '}
      {' '}
      <div>
        <b>6:00pm+:</b>
        {' '}
After Party
      </div>
    </div>


  </main>
);

export default HacktravelProgram;
