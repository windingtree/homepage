/* @flow */
import React from 'react';
import Item from './Item';
import type { GroupType } from './data';


const Group = (props: GroupType) => {
  const {
    title, elements, main, muted,
  } = props;
  const isMain = main ? 'main-group h3' : '';
  const isMuted = muted ? 'text-muted' : '';
  return (
    <div>
      <h4 className={`text-center pt-1 ${isMuted} ${isMain}`}>{title}</h4>
      <ul className="list-unstyled">
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
