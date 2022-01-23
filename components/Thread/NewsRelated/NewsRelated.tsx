import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IdThreadContext } from 'core/context/idThreadContext';
import { getRelativeEntries } from 'core/actions';
import { selectData } from 'core/selectors/examples/selecterData';
import Author from './Author';

export default function NewsRelated(): JSX.Element {
  const { id } = useContext(IdThreadContext);
  const { HasRelatedEntry, Entry } = useSelector(selectData);
  const dispatch = useDispatch();
  useEffect(() => {
    id && dispatch(getRelativeEntries(id));
  }, [id]);
  if (!HasRelatedEntry) return <React.Fragment />;
  const itemIds: any = HasRelatedEntry.getIn([id, 'itemIds']);

  // func
  const getTitle = (entryId: string): any => Entry.getIn([entryId, 'data', 'title']);
  const getUserId = (entryId: string): any => Entry.getIn([entryId, 'data', 'userId']);
  const getThumnai = (entryId: string): string => {
    const extent = Entry.getIn([entryId, 'data', 'extend']);
    let thumnai = '';
    try {
      thumnai = typeof extent === 'string' && JSON.parse(extent).image_url;
    } catch (e) {
      console.log('e', e);
    }
    return thumnai;
  };
  const createTime = (entryId: string): number | string | unknown => {
    const createdTime = Entry.getIn([entryId, 'data', 'createdTime']);
    return createdTime || new Date();
  };
  return (
    <div className={'container_news'}>
      <h2 className="title_news-h1 title">Chủ đề liên quan</h2>
      <div className={'list_news'}>
        <div className={'flex list_news-container'}>
          {itemIds.map((entryId: string) => (
            <div className="list_news-container_item" key={entryId}>
              <div className="list_news-container_item__">
                <div className="list_news-container_item__img">
                  <div className="list_news-container_item__img_" title={getTitle(entryId)}>
                    <a href={`/thread/.${entryId}`} className="list_news-container_item__img_tag-a">
                      <img
                        className="list_news-container_item__img_tag-a"
                        src={getThumnai(entryId)}
                        alt="img"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <a
                    href="/thread/nguoi-thai-tang-cuong-tieu-thu-thit-ca-sau-vi-gia-thit-lon-tang-cao.281474976796960"
                    className="list_news-container_item_tag-a"
                  />
                  <Author userId={getUserId(entryId)} createTime={createTime(entryId)} />
                </div>
                <a
                  title="Người Thái tăng cường tiêu thụ thịt cá sấu vì giá thịt lợn tăng cao"
                  href="/thread/nguoi-thai-tang-cuong-tieu-thu-thit-ca-sau-vi-gia-thit-lon-tang-cao.281474976796960"
                  className="list_news-container_item_title"
                >
                  {getTitle(entryId)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        //.title {}
        .list_news {
          background-color: #feb439;
          height: fit-content;
          margin: 0px -12px;
        }
        .list_news-container {
          align-items: flex-start;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 24px 6px 6px;
        }
        .list_news-container_item {
          margin-bottom: 10px;
          position: relative;
        }
        .list_news-container_item__ {
          display: flex;
          flex-direction: column;
          max-width: 221px;
        }
        .list_news-container_item__img {
          align-items: flex-end;
          background-size: cover;
          color: #fff;
          display: flex;
          margin-bottom: 10px;
          position: relative;
        }
        .list_news-container_item__img_ {
          height: 140px;
          width: 221px;
        }
        .list_news-container_item__img_tag-a {
          border-radius: 5px;
          height: 140px;
          width: 221px;
          object-fit: cover;
        }
        .list_news-container_item_tag-a {
          background-image: linear-gradient(180deg, transparent 25%, #000);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          bottom: 0;
          left: 0;
          opacity: 0.8;
          position: absolute;
          right: 0;
          top: 20px;
        }
        .list_news-container_item_title {
          line-clamp: 3;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #000;
          display: -webkit-box;
          font-size: 15px;
          font-weight: 600;
          max-height: 60px;
          overflow: hidden;
          text-decoration: none;
          text-overflow: ellipsis;
          position: relative;
        }
      `}</style>
    </div>
  );
}
