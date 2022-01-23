import React from 'react';

export default function NewsGeneral(): JSX.Element {
  return (
    <React.Fragment>
      <div className={'container'}>
        <div className="container_wrapper">
          <h2 className="flex container_wrapper_title">
            <span className="container_wrapper_title_name">Đánh giá nổi bật</span>
            <div className="container_wrapper_title__" />
          </h2>
          <a
            href="/thread/tai-nghe-sony-extrabass-wh-xb910n-chong-on-noi-bat-cho-basshead-tam-gia-5-trieu-dong.70368744336710"
            className="container_wrapper_item-big"
          >
            <div
              className="container_wrapper_item-big_img"
              title=" Tai nghe Sony ExtraBass WH-XB910N chống ồn nổi bật cho Basshead tầm giá 5 triệu đồng"
            >
              <img
                className="container_wrapper_item-big_img__"
                src="https://cdn.vnreview.vn/524288_141218524783600_496798867128320?wt=33c6a09ae6461678f8027d73a28a5c78&amp;rt=f0109ed7d248ae6b1d2e5f329eb87eed&amp;width=592&amp;height=312&amp;mode=fill"
                alt="img"
                loading="lazy"
              />
            </div>
            <h3
              className="container_wrapper_item-big_title"
              title=" Tai nghe Sony ExtraBass WH-XB910N chống ồn nổi bật cho Basshead tầm giá 5 triệu đồng"
            >
              {' '}
              Tai nghe Sony ExtraBass WH-XB910N chống ồn nổi bật cho Basshead tầm giá 5 triệu đồng
            </h3>
          </a>
          <div className={'container_wrapper_item-small'}>
            <div className="flex container_wrapper_item-small_item">
              <a
                href="/thread/danh-gia-camera-bphone-a40-chup-anh-xuat-sac.562949953490033"
                className="flex container_wrapper_item-small_item_wrapper-img"
              >
                <div
                  className="container_wrapper_item-small_item_wrapper-img__"
                  title="Đánh giá camera Bphone A40: Chụp ảnh xuất sắc"
                >
                  <img
                    className="container_wrapper_item-small_item_wrapper-img_tag-img"
                    src="https://cdn.vnreview.vn/786432_141218524770133_444812582977536?wt=d02753b441e91f2249603e01f3e03b1e&amp;rt=8433465d1bc7db0257468422e009dfda&amp;width=226&amp;height=158&amp;mode=fill"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="flex container_wrapper_item-small_item_wrapper-news">
                <h3 className="container_wrapper_item-small_item_wrapper-news_h3">
                  <a
                    title="Đánh giá camera Bphone A40: Chụp ảnh xuất sắc"
                    href="/thread/danh-gia-camera-bphone-a40-chup-anh-xuat-sac.562949953490033"
                    className="container_wrapper_item-small_item_wrapper-news_h3_name"
                  >
                    Đánh giá camera Bphone A40: Chụp ảnh xuất sắc
                  </a>
                </h3>
                {/*<div style="display: flex; align-items: center; margin-bottom: 6px;">*/}
                <div className={'flex container_wrapper_item-small_item_wrapper-news_profile'}>
                  <a href="https://vnreview.vn/profile/hoan-dang.140874927550934">
                    <div className="container_wrapper_item-small_item_wrapper-news_profile_avatar">
                      <img
                        className="container_wrapper_item-small_item_wrapper-news_profile_avatar_img"
                        src="https://cdn.vnreview.vn/720896_141218524716003_72606422138880?wt=e3c71c7bf5d99472e0a6b96a67351c46&amp;rt=136c1f67344aedc9b2a2ee3f5b2528bc&amp;width=150&amp;height=150"
                        alt=""
                      />
                    </div>
                  </a>
                  <div className="flex container_wrapper_item-small_item_wrapper-news_profile_reaction">
                    <div className="flex container_wrapper_item-small_item_wrapper-news_profile_reaction_icon">
                      <div className="reactButton">
                        <a role="presentation" className="flex">
                          <img
                            className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_img"
                            src="https://vnreview.vn/fonts/likeVNR.svg"
                            alt="likeVNR"
                          />
                        </a>
                      </div>
                      <div className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text">
                        <a role="presentation" className="ant-dropdown-trigger">
                          <span className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text_value">
                            12
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="flex container_wrapper_item-small_item_wrapper-news_profile_reaction_icon">
                      <div className="reactButton">
                        <a role="presentation" className="flex">
                          <img
                            className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_img"
                            src="https://vnreview.vn/fonts/commentVNR.svg"
                            alt="commentVNR"
                          />
                        </a>
                      </div>
                      <div className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text">
                        <a role="presentation" className="ant-dropdown-trigger">
                          <span className="container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text_value">
                            12
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/danh-gia-noi-bat">
          <div className="see-more">
            <span className="see-more_text">Xem thêm</span>
          </div>
        </a>
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .container {
          background-color: #fff;
          border-radius: 12px;
        }
        .container_wrapper {
          padding: 16px 14px;
        }
        .container_wrapper_title {
          align-items: flex-end;
          margin-top: 0;
        }
        .container_wrapper_title_name {
          color: #f2761c;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
          margin-right: 6px;
          text-transform: uppercase;
        }
        .container_wrapper_title__ {
          background-color: #f2761c;
          flex: 1;
          height: 1px;
          margin-bottom: 4px;
        }
        .container_wrapper_item-big {
          flex-direction: column;
          margin-top: 23px;
        }
        .container_wrapper_item-big_img {
          border-radius: 5px;
          flex-shrink: 0;
          height: 156px;
          overflow: hidden;
          width: 100%;
        }
        .container_wrapper_item-big_img__ {
          height: 100%;
          object-fit: cover;
          width: 100%;
          max-width: 100%;
        }
        .container_wrapper_item-big_title {
          line-clamp: 4;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          color: #000;
          display: block;
          display: -webkit-box;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          margin-bottom: 11px;
          margin-top: 11px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;
        }
        .container_wrapper_item-small_item {
          padding: 11px 0;
        }
        .container_wrapper_item-small_item_wrapper-img {
          flex-direction: column;
        }
        .container_wrapper_item-small_item_wrapper-img__ {
          border-radius: 5px;
          flex-shrink: 0;
          overflow: hidden;
          height: 79px;
          margin-bottom: 4px;
          margin-top: 4px;
          width: 113px;
          object-fit: cover;
        }
        .container_wrapper_item-small_item_wrapper-img_tag-img {
          height: 100%;
          object-fit: cover;
          width: 100%;
          max-width: 100%;
        }
        .container_wrapper_item-small_item_wrapper-news {
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 13px;
        }
        .container_wrapper_item-small_item_wrapper-news_h3 {
          margin-bottom: 0;
          margin-top: 0;
        }
        .container_wrapper_item-small_item_wrapper-news_h3_name {
          line-clamp: 4;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          color: #000;
          display: -webkit-box;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
          margin-bottom: 3px;
          overflow: hidden;
          text-decoration: none;
          text-overflow: ellipsis;
        }
        .container_wrapper_item-small_item_wrapper-news_profile {
          align-items: center;
          margin-bottom: 6px;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_avatar {
          height: 18px;
          min-height: 18px;
          min-width: 18px;
          width: 18px;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_avatar_img {
          height: 18px;
          min-height: 18px;
          min-width: 18px;
          width: 18px;
          line-height: 0;
          border-radius: 50%;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_reaction {
          align-items: center;
          flex-direction: row;
          flex: 1;
          justify-content: space-between;
          margin-left: 8px;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_reaction_icon {
          align-items: center;
          flex-direction: row;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_img {
          width: 14px;
          cursor: pointer;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text {
          cursor: pointer;
          margin-left: 5px;
        }
        .container_wrapper_item-small_item_wrapper-news_profile_reaction_icon_text_value {
          color: #707070;
          font-size: 11px;
          line-height: 1.36;
        }
        .see-more {
          align-items: center;
          background-color: rgba(255, 170, 0, 0.1);
          border-radius: 12px 12px 0 0;
          display: flex;
          height: 27px;
          justify-content: center;
          margin: 0 auto;
          text-align: center;
          width: 102px;
        }
        .see-more_text {
          color: #f78d03;
          font-size: 13px;
          font-stretch: normal;
          font-style: normal;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 1.38;
          text-decoration: none;
        }
      `}</style>
    </React.Fragment>
  );
}
