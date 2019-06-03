
import React from 'react';
import metadata from 'DATA/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';

const HacktravelProgram = () => (
  <main id="app-content">
    <CustomHelmet {...metadata.home} />

    <section className="short-banner-bg py-4 px-1">
      <h1 className="mt-4 text-center text-white">#HackTravel Lisbon 2019 Program</h1>
    </section>

    <div className="container py-md-4 px-md-4 px-1 py-4">
      <h2>WHERE</h2>
      <div>
        <b>Venue:</b>
        {' '}
LX Factory, Building Fabrica L
      </div>
      <div>
        <b>Address:</b>
        {' '}
R. Rodrigues de Faria 103, 1300-501 Lisboa, Portugal
      </div>
      <div>
        <b>Website:</b>
        <a href=" https://lxfactory.com/en/lx-factory/"> https://lxfactory.com/en/lx-factory/</a>
      </div>


      <h2 className="pt-2">WHAT & WHEN</h2>
      <h3 className="pt-1">July 3, 2019</h3>
      <div>
        <b>1:00pm:</b>
        {' '}
Doors open & Registration
      </div>
      <div>
        <b>1:30pm:</b>
        <a href="https://blog.windingtree.com/were-pioneering-travel-tech-business-hackathon-tickets-are-open-ba6489078bca"> Business Hackathon</a>
        {' '}
kick off
        <ul>
          <li>Business hackathon introduction & process overview</li>
          <li>Demo case studies</li>
        </ul>
      </div>
      <div>
        <b>2:30pm:</b>
        {' '}
Coffee & snacks break
      </div>
      <div>
        <b>3:00pm:</b>
        {' '}
Business Hackathon - group work
      </div>
      <div>
        <b>5:00pm:</b>
        {' '}
Happy Hour & Getting to know each other
      </div>
      <div>
        <b>6:00-7:00pm:</b>
        {' '}
Beginners Crash Course on Winding Tree platform, decentralization, smart contracts, public blockchains and open source
      </div>

      <h3 className="pt-2">July 4, 2019</h3>
      <div>
        <b>8:30am:</b>
        {' '}
Doors open & Registration, Breakfast & Coffee
      </div>
      <div>
        <b>9:00pm:</b>
            Main Program Talks
        <ul>
          <li>Welcome Note</li>
          <li>Special Announcement from Winding Tree team</li>
          <li>Partner Case Studies</li>
          <li>Introduction to Hackathon Challenges, Rules, Submission Process</li>
        </ul>
      </div>
      <div>
        <b>12:00pm:</b>
        {' '}
Lunch & Networking / Teams Forming
      </div>
      <div>
        <b>1:00pm:</b>
            Technical Hackathon kick off:
        <ul>
          <li>Winding Tree Platform Onboarding Demos</li>
          <li>Teams Forming</li>
        </ul>
      </div>
      <div>
        <b>1:30pm:</b>
        {' '}
Hacking Continues: Technical & Business tracks
      </div>
      <div>
        <b>3:00pm:</b>
        {' '}
Coffee & snacks break
      </div>
      <div>
        <b>5:00pm:</b>
        {' '}
Business Hackathon stops / submissions
      </div>
      <div>
        <b>5:30pm:</b>
        {' '}
Happy Hour & Business Hackathon outcomes
      </div>
      <div>
        <b>7:00pm:</b>
        {' '}
Dinner & Networking
      </div>
      <div>
        <b>8:00pm+:</b>
        {' '}
Hacking Continues
      </div>

      <h3 className="pt-2">July 5, 2019</h3>
      <div>
        <b>8:30am:</b>
        {' '}
Doors open & Registration, Breakfast & Coffee
      </div>
      <div>
        <b>9:00pm:</b>
        {' '}
Hacking Continues
      </div>
      <div>
        <b>12:00pm:</b>
        {' '}
Lunch & Networking
      </div>
      <div>
        <b>2:00pm:</b>
        {' '}
Hacking stops & submissions
      </div>
      <div>
        <b>3:00pm:</b>
        {' '}
Hack Pitching starts
      </div>
      <div>
        <b>5:00-7:00pm:</b>
        {' '}
Happy Hour & Pitch Judging
      </div>
      <div>
        <b>8:00-11:00pm:</b>
        {' '}
After Party
      </div>
      <div>
        <b>9:00pm:</b>
        {' '}
Hacker Awards
      </div>
    </div>


  </main>
);

export default HacktravelProgram;
