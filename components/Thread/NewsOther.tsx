import React from 'react';

export default function NewsOther(): JSX.Element {
  return (
    <div className={'container_news'}>
      <h2 className="title_news-h1 title">Chủ đề khác</h2>
      <div className={'list_news'}>
        <div className={'flex list_news-container'}>
          {/*<div  style="height: unset;">*/}
          <div className="list_news-container_item flex">
            <div className="list_news-container_item-content flex">
              <a href="/thread/bo-cong-an-thuy-tien-dam-vinh-hung-khong-chiem-doat-tien-tu-thien.422212465152758">
                <div className="list_news-container_item-content_image">
                  <img
                    className="list_news-container_item-content_image_src"
                    src="https://cdn.vnreview.vn/655360_70849780687389_529792805896192?wt=f0c3c7afdd7ab1955b971c859c50dcef&amp;rt=f8f61e78a402c86b851b3e46c1dcb2cf&amp;width=366&amp;height=280&amp;mode=fill"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="list_news-container_item-content_title">
                <h3>
                  <a
                    title="Bộ Công an: Thủy Tiên, Đàm Vĩnh Hưng không chiếm đoạt tiền từ thiện"
                    href="/thread/bo-cong-an-thuy-tien-dam-vinh-hung-khong-chiem-doat-tien-tu-thien.422212465152758"
                    className="list_news-container_item-content_title_context"
                  >
                    Bộ Công an: Thủy Tiên, Đàm Vĩnh Hưng không chiếm đoạt tiền từ thiện
                  </a>
                </h3>
                <div className="flex list_news-container_item-content_title_info">
                  <a
                    href="/profile/chu-chi-nhuoc.70506183155465"
                    className="list_news-container_item-content_title_info_a"
                  >
                    <div>
                      <img
                        className="list_news-container_item-content_title_info_avatar"
                        src="https://cdn.vnreview.vn/786432_70849780557444_193514046488576?wt=ad342782e78ec379b2c535b1299aa912&amp;rt=78acd4283ea42c8742de9aada4dbfe6e&amp;width=150&amp;height=150"
                        alt=""
                      />
                    </div>
                    <span className="list_news-container_item-content_title_info_name">
                      <span
                        role="presentation"
                        className="_10z-5sSgqbAbAvaTT6vGa4 snw-author-name"
                        // style="font-weight: 600;"
                      >
                        Chu Chỉ Nhược
                      </span>
                    </span>
                  </a>
                  <span className="list_news-container_item-content_title_info_time">
                    <time>
                      <span>2h</span>
                    </time>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex list_news-container_item-content-reaction">
              <div className="list_news-container_item-content-reaction-like">
                {/*<div className="_1En51MVPPuSz0yq0Z_1U9W reactionInfo">*/}
                {/*  <a role="presentation" className="ant-dropdown-trigger">*/}
                {/*    <span>*/}
                {/*      <i*/}
                {/*        role="presentation"*/}
                {/*        className="snw-icon snw-icon-reaction-vnreview-sm snw-icon-like disableSelected"*/}
                {/*      >*/}
                {/*        &nbsp;*/}
                {/*      </i>*/}
                {/*      &nbsp;*/}
                {/*    </span>*/}
                {/*    <span className="u4MT6nYNnYthzqK7X3rw0">2</span>*/}
                {/*  </a>*/}
                {/*</div>*/}
                <div className="flex list_news-container_item-content-reaction-like-content">
                  <img
                    className="list_news-container_item-content-reaction-like-content-icon"
                    src="https://vnreview.vn/fonts/likeVNR.svg"
                    alt="likeVNR"
                  />
                  <span
                    className={'list_news-container_item-content-reaction-like-content-nameIcon'}
                  >
                    Thích
                  </span>
                </div>
              </div>
              <div className="list_news-container_item-content-reaction-like">
                <div className="flex list_news-container_item-content-reaction-like-content">
                  <img
                    className="list_news-container_item-content-reaction-like-content-icon"
                    src="https://vnreview.vn/fonts/commentVNR.svg"
                    alt="commentVNR"
                  />
                  <span className="list_news-container_item-content-reaction-like-content-nameIcon">
                    Bình luận
                  </span>
                </div>
              </div>
              <div className="list_news-container_item-content-reaction-like">
                <div className="flex list_news-container_item-content-reaction-like-content">
                  <img
                    className="list_news-container_item-content-reaction-like-content-icon"
                    src="https://vnreview.vn/fonts/shareVNR.svg"
                    alt="shareVNR"
                  />
                  <span className="list_news-container_item-content-reaction-like-content-nameIcon">
                    Chia sẻ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        //.title {}
        .list_news {
          height: 250px;
          margin: 0px -12px;
        }
        .list_news-container {
          align-items: flex-start;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 24px 6px 6px;
        }
        .list_news-container_item {
          background-color: #fff;
          //position: relative;
          flex-direction: column;
        }
        .list_news-container_item-content {
          margin-bottom: 5px;
        }
        .list_news-container_item-content_image {
          padding-bottom: 10px;
          padding-top: 10px;
          width: 183px;
          height: 140px;
        }
        .list_news-container_item-content_image_src {
          border-radius: 5px;
          display: block;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          width: 100%;
        }
        .list_news-container_item-content_title {
          margin-left: 22px;
        }
        h3 {
          margin-top: 0;
        }
        .list_news-container_item-content_title_context {
          color: #333;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          margin-bottom: 16px;
          overflow: hidden;
          text-decoration: none;
          text-overflow: ellipsis;
        }
        .list_news-container_item-content_title_info {
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 16px;
        }
        .list_news-container_item-content_title_info_a {
          align-items: center;
          display: flex;
        }
        .list_news-container_item-content_title_info_avatar {
          height: 38px;
          min-height: 38px;
          min-width: 38px;
          width: 38px;
          background-color: rgba(0, 0, 0, 0.05);
          color: #54c0ff;
          overflow: hidden;
          border-radius: 50%;
        }
        .list_news-container_item-content_title_info_name {
          margin-left: 14px;
          font-weight: 600;
          display: block;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #f2761c;
          font-size: 17px;
          line-height: 1.38;
        }
        .list_news-container_item-content_title_info_time {
          margin-left: 9px;
          font-size: 17px;
          line-height: 1.38;
          color: #7a7a7a;
        }
        .list_news-container_item-content-reaction {
          align-items: center;
          flex-direction: row;
          justify-content: space-around;
        }
        .list_news-container_item-content-reaction-like-content {
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          background-color: transparent;
        }
        .list_news-container_item-content-reaction-like-content-icon {
          width: 18px;
        }
        .list_news-container_item-content-reaction-like-content-nameIcon {
          color: #444;
          font-size: 13px;
          line-height: 1.31;
          margin-left: 9px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
