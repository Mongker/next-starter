/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 16/01/2022
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import type { NextPage } from 'next';
import React from 'react';
// import PropTypes from 'prop-types';

const NullPage: NextPage = () => {
  return (
    <React.Fragment>
      <div className="noise" />
      <div className="overlay" />
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name changed or is
          temporarily unavailable. <br />
          <i>
            ( Trang bạn đang tìm kiếm có thể đã bị xóa, đã thay đổi tên hoặc là tạm thời không khả
            dụng. )
          </i>
        </p>
        <p className="output">
          <a href="/">return to the homepage</a>.
        </p>
        <p className="output">
          Good luck <i>(Chúc may mắn)</i>.
        </p>
      </div>
      <style jsx global>{`
        body {
          box-sizing: border-box;
          height: 100%;
          background-color: #000000;
          //background-image: radial-gradient(#11581e, #041607),
          //  url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
          background-image: radial-gradient(#11581e, #041607);
          background-repeat: no-repeat;
          background-size: cover;
          font-family: 'Inconsolata', Helvetica, sans-serif;
          font-size: 1.5rem;
          color: rgba(128, 255, 128, 0.8);
          text-shadow: 0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8);
        }

        .noise {
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
          background-repeat: no-repeat;
          background-size: cover;
          z-index: -1;
          opacity: 0.02;
        }

        .overlay {
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          background-size: auto 4px;
          z-index: 1;
        }

        .overlay::before {
          content: '';
          pointer-events: none;
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            0deg,
            transparent 0%,
            rgba(32, 128, 32, 0.2) 2%,
            rgba(32, 128, 32, 0.8) 3%,
            rgba(32, 128, 32, 0.2) 3%,
            transparent 100%
          );
          background-repeat: no-repeat;
          animation: scan 7.5s linear 0s infinite;
        }

        @keyframes scan {
          0% {
            background-position: 0 -100vh;
          }
          35%,
          100% {
            background-position: 0 100vh;
          }
        }

        .terminal {
          box-sizing: inherit;
          position: absolute;
          height: 100%;
          width: 1000px;
          max-width: 100%;
          padding: 4rem;
          text-transform: uppercase;
        }

        .output {
          color: rgba(128, 255, 128, 0.8);
          text-shadow: 0 0 1px rgba(51, 255, 51, 0.4), 0 0 2px rgba(255, 255, 255, 0.8);
        }

        .output::before {
          content: '> ';
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        a::before {
          content: '[';
        }

        a::after {
          content: ']';
        }

        .errorcode {
          color: white;
        }
      `}</style>
    </React.Fragment>
  );
};
export default NullPage;
