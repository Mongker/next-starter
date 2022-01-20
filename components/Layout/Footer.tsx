import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_content_img">
            <a href="http://vnreview.vn/">
              <img
                className="snw-icon snw-icon-logo disableSelected _2J8_LnDwCN-tL4IbF5hstA"
                src="https://vnreview.vn/fonts/VnReview.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="footer_content_img_text">
            <div>
              <p>Chịu trách nhiệm nội dung: LÊ THANH NAM</p>
              <p>@ 2021 Công ty Cổ phần Bkav</p>
              <p>Địa chỉ: Tòa nhà HH1 Khu đô thị Yên Hòa, quận Cầu Giấy, TP.Hà Nội</p>
              <p>
                Giấy phép thiết lập mạng xã hội số số 559/GP-BTTTT do Bộ thông tin và truyền thông
                cấp ngày 19 tháng 12 năm 2019.
              </p>
            </div>
            <div className="footer_content_img_text_list">
              <p>
                Email: <a href="mailto:bbt@vnreview.vn">BBT@vnreview.vn</a>
              </p>
              <p>
                Hotline: <a href="tel:+84912301990">0912.30.19.90</a>
              </p>
              <a href="/thread/quy-dinh-dieu-khoan-mang-xa-hoi-vnreview.351843720906497">
                Quy định và điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="footer_content_list"
          // style="padding-top: 18px; padding-bottom: 20px;"
        >
          <div className="footer_content_img" />
          <div className="footer_content_img_text_list_contact">
            <p className="footer_content_img_text_list_contact_text">Liên hệ quảng cáo</p>
            <p>
              Email:{' '}
              <a className="_36kQt22QfCnbmlszNs2oog" href="mailto:qc@vnreview.vn">
                QC@vnreview.vn
              </a>
            </p>
            <p>
              Hotline:{' '}
              <a className="_36kQt22QfCnbmlszNs2oog" href="tel:+84978190077">
                0978.19.00.77
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <style jsx>{`
        .footer {
          background-color: #272729;
          display: flex;
          flex-direction: column;
          padding-top: 36px;
        }
        .footer_content {
          display: flex;
          align-items: center;
          padding-left: 21.5%;
          padding-right: 21.5%;
        }
        .footer_content_img {
          height: 50px;
          width: 250px;
        }
        .footer_content_img_text {
          font-size: 12px;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: left;
        }
        .footer_content_img_text_list {
          margin-bottom: 18px;
          margin-top: 18px;
        }
        .footer_content_img_text_list_contact {
          flex: 1;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2;
          letter-spacing: normal;
          text-align: left;
          color: rgba(255, 255, 255, 0.3);
        }
        .footer_content_img_text_list_contact_text {
          font-size: 12px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.17;
          letter-spacing: normal;
          text-align: left;
          color: #f79a08;
        }
        .footer_content_list {
          display: flex;
          align-items: center;
          padding: 18px 21.5% 20px 21.5%;
        }
        p {
          color: hsla(0, 0%, 100%, 0.3);
        }
        a {
          text-decoration: none;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
          color: hsla(0, 0%, 100%, 0.3);
        }
        hr {
          background-color: rgba(204, 204, 204, 0.3);
          height: 1px;
          width: 100%;
          border-width: 0;
        }
      `}</style>
    </React.Fragment>
  );
}
