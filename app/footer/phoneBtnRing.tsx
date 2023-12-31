export default function PhoneBtnRing() {
  return (
    <div className="hotline-phone-ring left-[50%] translate-x-[-50%] relative">
      <div className="hotline-phone-ring-circle"></div>
      <div className="hotline-phone-ring-circle-fill"></div>
      <div className="hotline-phone-ring-img-circle">
        <i className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </i>
      </div>
      <style jsx>
        {`
          // hotline phone ring
          .hotline-phone-ring {
            background-color: transparent;
            width: 110px;
            height: 110px;
            cursor: pointer;
            z-index: 11;
            transition: visibility 0.5s;
            display: block;
            top: -60px;
          }
          .hotline-phone-ring-circle {
            width: 90px;
            height: 90px;
            top: 10px;
            left: 10px;
            position: absolute;
            background-color: transparent;
            border-radius: 100%;
            border: 2px solid #e60808;
            -webkit-animation: phonering-alo-circle-anim 1.2s infinite
              ease-in-out;
            animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
            transition: all 0.5s;
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 0.5;
          }
          .hotline-phone-ring-circle-fill {
            width: 60px;
            height: 60px;
            top: 25px;
            left: 25px;
            position: absolute;
            background-color: rgba(230, 8, 8, 0.7);
            border-radius: 100%;
            border: 2px solid transparent;
            -webkit-animation: phonering-alo-circle-fill-anim 2.3s infinite
              ease-in-out;
            animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
            transition: all 0.5s;
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
          }
          .hotline-phone-ring-img-circle {
            background-color: #e60808;
            width: 36px;
            height: 36px;
            top: 37px;
            left: 37px;
            position: absolute;
            background-size: 20px;
            border-radius: 100%;
            border: 2px solid transparent;
            -webkit-animation: phonering-alo-circle-img-anim 1s infinite
              ease-in-out;
            animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @keyframes phonering-alo-circle-anim {
            0% {
              -webkit-transform: rotate(0) scale(0.5) skew(1deg);
              -webkit-opacity: 0.1;
            }
            30% {
              -webkit-transform: rotate(0) scale(0.7) skew(1deg);
              -webkit-opacity: 0.5;
            }
            100% {
              -webkit-transform: rotate(0) scale(1) skew(1deg);
              -webkit-opacity: 0.1;
            }
          }
          @keyframes phonering-alo-circle-fill-anim {
            0% {
              -webkit-transform: rotate(0) scale(0.7) skew(1deg);
              opacity: 0.6;
            }
            50% {
              -webkit-transform: rotate(0) scale(1) skew(1deg);
              opacity: 0.6;
            }
            100% {
              -webkit-transform: rotate(0) scale(0.7) skew(1deg);
              opacity: 0.6;
            }
          }
          @keyframes phonering-alo-circle-img-anim {
            0% {
              -webkit-transform: rotate(0) scale(1) skew(1deg);
            }
            10% {
              -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
            }
            20% {
              -webkit-transform: rotate(25deg) scale(1) skew(1deg);
            }
            30% {
              -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
            }
            40% {
              -webkit-transform: rotate(25deg) scale(1) skew(1deg);
            }
            50% {
              -webkit-transform: rotate(0) scale(1) skew(1deg);
            }
            100% {
              -webkit-transform: rotate(0) scale(1) skew(1deg);
            }
          }

          // End hotline phone ring
        `}
      </style>
    </div>
  );
}
