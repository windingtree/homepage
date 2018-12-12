/* @flow */
import React from 'react';
import './max.jpg';

type PropsType = {
  body: string,
  name: string,
  role: string,
  img: string
};

const Solutions = (props: PropsType) => {
  const {
    body, name, role, img,
  } = props;
  return (
    <blockquote className="blockquote">
      <p className="blockquote-body">
        <i className="mdi mdi-36px mdi-format-quote-open" />
        {body}
        <i className="mdi mdi-36px mdi-format-quote-close" />
      </p>
      <footer className="blockquote-footer">
        <div className="user">
          <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
            <defs>
              <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path" />
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <mask id="mask" fill="white">
                <use xlinkHref="#path" />
              </mask>
              <image mask="url(#mask)" width="108" height="120" xlinkHref={img} />
            </g>
          </svg>
          <div className="user-data">
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>
          </div>
        </div>
      </footer>
    </blockquote>
  );
};

export default Solutions;
