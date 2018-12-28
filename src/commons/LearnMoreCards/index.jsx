/* @flow */
import React from 'react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';
import cardsInfo from './data';

type DataType = {
  href: string,
  title?: string,
  text?: string,
  linkText?: string
};
type PropsType = {
  main?: boolean,
  data?: {[string]: DataType}
};

const LearnMoreCards = ({ main, data }: PropsType) => (
  <CardDeck>
    {
      cardsInfo.map((info) => {
        const overrideData = data && data[info.href];
        return (
          <Card
            key={info.href}
            {...info}
            {...overrideData}
            imgSrc={info.imgSrc}
            withButton={main}
          />
        );
      })
    }
  </CardDeck>
);
export default LearnMoreCards;
