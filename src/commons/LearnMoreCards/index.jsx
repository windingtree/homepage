/* @flow */
import React from 'react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';
import cardsInfo from './data';

const LearnMoreCards = () => (
  <CardDeck>
    {
      cardsInfo.map(info => (
        <Card
          key={info.href}
          title={info.title}
          href={info.href}
          text={info.text}
          linkText={info.linkText}
          imgSrc={info.imgSrc}
        />
      ))
    }
  </CardDeck>
);
export default LearnMoreCards;
