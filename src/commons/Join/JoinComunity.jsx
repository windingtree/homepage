/* @flow */
import React from 'react';

const icons = [
  {
    className: 'mdi-github-circle',
    href: 'https://github.com/windingtree',
    title: 'GitHub',
  },
  {
    className: 'mdi-google-plus-box',
    href: 'https://groups.google.com/forum/#!forum/windingtree',
    title: 'Google Groups',
  },
  {
    className: 'mdi-twitter',
    href: 'https://twitter.com/windingtree',
    title: 'Twitter',
  },
  {
    className: 'mdi-medium',
    href: 'http://blog.windingtree.com/',
    title: 'Medium',
  },
  {
    className: 'mdi-youtube',
    href: 'https://www.youtube.com/channel/UCFuemEOhCfenYMoNdjD0Aew',
    title: 'YouTube',
  },
  {
    className: 'mdi-telegram',
    href: 'https://t.me/windingtree',
    title: 'Telegram',
  },
  {
    className: 'mdi-reddit',
    href: 'https://reddit.com/r/windingtree',
    title: 'Reddit',
  },
  {
    className: 'mdi-bitcoin',
    href: 'https://bitcointalk.org/index.php?topic=1946065',
    title: 'BitcoinTalk',
  },
];

const JoinComunity = () => (
  <section>
    <h3 className="mb-1 mb-md-2">
        Join Community
    </h3>
    <ul className="social list-inline text-center list-unstyled">
      {
        icons.map(icon => (
          <li className="list-inline-item" key={icon.href}>
            <a href={icon.href} tittle={icon.title} className="text-dark text-alpha-inverse">
              <i className={`mdi mdi-36px ${icon.className}`} />
            </a>
          </li>
        ))
      }
    </ul>
  </section>
);

export default JoinComunity;
