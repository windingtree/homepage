/* @flow */
import React from 'react';
import classNames from 'classnames';
import Item from './Item';
import type { GroupType } from './data';

const Group = (props: GroupType) => {
  const {
    title, elements, main, muted,
  } = props;
  const h4ClassName = classNames(
    'text-center',
    {
      'main-group h3 pt-1': main,
      'pt-3': !main,
      'text-muted': muted,
    },
  );
  const ulClassName = classNames(
    'list-unstyled',
    {
      'pl-5': main,
    },
  );
  return (
    <div className>
      <h4 className={h4ClassName}>{title}</h4>
      <ul className={ulClassName}>
        {elements.map((element, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`roadmap-${title}-${index}`}>
            <Item {...element} muted={muted} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Group;
