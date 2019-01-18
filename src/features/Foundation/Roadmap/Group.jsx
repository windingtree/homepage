/* @flow */
import React from 'react';
import classNames from 'classnames';
import Item from './Item';
import type { GroupType } from './data';

const Group = (props: GroupType) => {
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
    {
      // 'pl-lg-5': main,
    },
  );
  return (
    <div className="roadmap__group">
      <h3 className={h3ClassName}>{title}</h3>
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
