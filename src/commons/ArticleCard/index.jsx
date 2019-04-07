// @flow
import React from 'react';


const ArticleCard = (props: *) => {
  const { articleItem } = props;
  return (
    <>
      <div className="text-center card-news shadow mx-lg-1 my-1">

        <a href={articleItem.articleUrl} target="__blank" rel="noopener noreferrer">
          <div className="card-img-top rounded">
            <div className="img-crop rounded" style={{ background: `url(${articleItem.thumbnail})` }} />
            <div className="news-card-title px-1">
              <p className="h4 text-white my-0">{articleItem.articleTitle}</p>
            </div>
          </div>
        </a>


      </div>
    </>
  );
};

export default ArticleCard;
