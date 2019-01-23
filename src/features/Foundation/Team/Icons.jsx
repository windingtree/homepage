// @flow
import React from 'react';
import type { IconsType } from '../data';

type PropsType = {
  icons: IconsType
};

const Icons = ({ icons }: PropsType) => {
  const {
    github, twitter, linkedin, link, bitBucket, vk, facebook,
  } = icons;
  return (
    <ul className="d-none d-md-block list-inline">
      {github && (
        <li className="list-inline-item">
          <a href={github} title="GitHub" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-github-circle" />
          </a>
        </li>)}
      {twitter && (
        <li className="list-inline-item">
          <a href={twitter} title="Twitter" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-twitter" />
          </a>
        </li>)}
      {linkedin && (
        <li className="list-inline-item">
          <a href={linkedin} title="LinkedIn" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-linkedin" />
          </a>
        </li>
      )}
      {link && (
        <li className="list-inline-item">
          <a href={link} title="Link" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-link-variant" />
          </a>
        </li>)}
      {facebook && (
        <li className="list-inline-item">
          <a href={facebook} title="Facebook" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-facebook" />
          </a>
        </li>)}
      {vk && (
        <li className="list-inline-item">
          <a href={vk} title="VK" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-vk" />
          </a>
        </li>)}
      {bitBucket && (
        <li className="list-inline-item">
          <a href={bitBucket} title="Bitbucket" className="text-muted text-alpha" target="_blank" rel="noopener noreferrer">
            <i className="mdi mdi-24px mdi-bitbucket" />
          </a>
        </li>)}
    </ul>
  );
};

export default Icons;
