import React from 'react';

export default function Header(): JSX.Element {
  return (
    <React.Fragment>
      <div className={'header'}>
        <div className={'header_content'}>
          <div className={'header_content_logo_img'}>
            <a href="/">
              <img
                className="header_content_img icon"
                src="https://vnreview.vn/fonts/VnReview.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className={'header_content_nav'}>
            <nav className="header_content_nav-center">
              <a href="https://vnreview.vn/forums" className="header_content_nav-center_link">
                Diễn đàn
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="header_content_nav-center_link"
                href="http://home.vn"
              >
                Điểm tin
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="header_content_nav-center_link"
                href="http://khophanmem.vn"
              >
                Download
              </a>
            </nav>
          </div>
          <div className={'header_content_search'}>
            <img
              className="icon"
              src="https://vnreview.vn/e12547061c1cf1252389.png"
              alt="messengerSearchBtn"
              color="#fff"
            />
            <input
              className={'header_content_search_input'}
              type="search"
              placeholder="Tìm bài viết, sản phẩm, nhóm"
            />
          </div>
          <div>
            <div className="header_content_login-center">
              <img alt="Avatar" src="https://vnreview.vn/fonts/AvatarDefaultNotLogin.svg" />
              <span className="header_content_login-center_text">
                <a href="https://vnreview.vn/option/login">Đăng nhập</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .header {
          width: 100%;
          background-color: #272729;
        }
        .icon {
          background: transparent;
          vertical-align: middle;
        }
        .header a {
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
          color: white;
        }
        .header_content {
          height: 46px;
          margin-left: 21.5%;
          margin-right: 21.5%;

          align-items: center;
          display: flex;
          justify-content: space-between;
        }
        .header_content_nav {
          width: 250px;
        }
        .header_content_nav-center {
          display: flex;
          justify-content: space-between;
        }
        .header_content_nav-center_link {
          color: white;
        }
        .header_content_logo_img {
          width: 151px;
          border-style: none;
        }
        .header_content_search {
          align-items: center;
          background-color: #3e3e3e;
          border-radius: 13px;
          display: flex;
          justify-content: flex-start;
          padding: 0 15px;
          width: 226px;
        }
        .header_content_search_input {
          background-color: transparent;
          color: #9e9e9e;
          border-color: transparent;
          flex: 1;
          font-size: 11px;
          font-style: italic;
          height: 26px;
          margin-left: 7px;
        }
        .header_content_login-center {
          display: flex;
          width: 100%;
          overflow: hidden;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          font-size: 17px;
          font-stretch: normal;
          font-style: normal;
        }
        .header_content_login-center_text {
          text-transform: capitalize;
          color: #fff;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
          max-width: 150px;
          font-size: 13px !important;
        }
      `}</style>
    </React.Fragment>
  );
}
