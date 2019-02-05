/* @flow */
import React from 'react';
import classNames from 'classnames';
import Item from './Item';
import type { GroupType } from 'DATA/features/Foundation/Roadmap';

type PropsType = GroupType & { muted: boolean };
const Group = (props: PropsType) => {
  const {
    title, elements, main, muted,
  } = props;
  const h3ClassName = classNames(
    'text-center',
    {
      'main-group': main,
      lead: !main,
      'text-muted': muted,
    },
  );
  const ulClassName = classNames(
    'list-unstyled',
  );
  return (
    <div className="roadmap__group">
      <h3 className={h3ClassName}>{title}</h3>
      <ul className={ulClassName}>
        {elements.map(element => (
          <li key={`${element.text}`}>
            <Item {...element} muted={muted} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Group;
