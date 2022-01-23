import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from 'core/utils/functions/formatDateVN';
import { getDataIdUser } from '../../../core/actions';
import { selectData } from '../../../core/selectors/examples/selecterData';

interface I_Author {
  userId: string;
  createTime: number | string | unknown;
}
export default function Author({ userId, createTime }: I_Author): JSX.Element {
  const dispatch = useDispatch();
  const { User } = useSelector(selectData);
  useEffect(() => {
    dispatch(getDataIdUser(userId));
  }, [userId]);
  if (!User) return <React.Fragment />;
  const fullName = User.getIn([userId, 'data', 'fullName']);
  const avatar = User.getIn([userId, 'data', 'avatar']);
  console.log('createTime', createTime); // MongLV log fix bug
  return (
    <React.Fragment>
      <div className="list_news-container_item_profile">
        <div className="list_news-container_item_profile_">
          <a href={`/profile/.${userId}`} className="list_news-container_item_profile_tag-a">
            <div>
              <img
                className="list_news-container_item_profile_tag-a_avatar"
                src={typeof avatar === 'string' ? avatar : ''}
                alt=""
              />
            </div>
            <div className="list_news-container_item_profile_tag-a_name-time">
              <span
                role="presentation"
                className="list_news-container_item_profile_tag-a_name-time_name"
              >
                {typeof fullName === 'string' && fullName}
              </span>
              <span className="list_news-container_item_profile_tag-a_name-time_time">
                {formatDate(createTime)}
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .list_news-container_item_profile {
          padding-left: 11px;
          padding-right: 11px;
          bottom: 8px;
          position: absolute;
        }
        .list_news-container_item_profile_ {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        .list_news-container_item_profile_tag-a {
          align-items: center;
          display: flex;
          position: relative;
        }
        .list_news-container_item_profile_tag-a_avatar {
          height: 35px;
          min-height: 35px;
          min-width: 35px;
          width: 35px;
          border-radius: 50%;
          line-height: 0;
        }
        .list_news-container_item_profile_tag-a_name-time {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .list_news-container_item_profile_tag-a_name-time_name {
          font-size: 12px;
          line-height: 1.36;
          margin-left: 4.5px;
          color: #fff;
          display: block;
          font-weight: 600;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .list_news-container_item_profile_tag-a_name-time_time {
          font-size: 12px;
          margin-left: 9px;
          opacity: 0.8;
          color: #fff;
        }
      `}</style>
    </React.Fragment>
  );
}
