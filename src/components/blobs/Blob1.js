const Blob1 = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" {...props}>
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" offset="0%" stopColor="rgba(111, 2, 176, 1)"></stop>
          <stop id="stop2" offset="100%" stopColor="rgba(154, 2, 242, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        stroke="url(#sw-gradient)"
        strokeWidth="0"
        d="M23.9-28.3c4.7 3.8 4.7 13.5 6.9 23.3 2.3 9.8 7 19.7 4 25.2-3.1 5.5-13.8 6.7-23.6 10.1-9.9 3.4-18.7 9.1-24.2 6.6S-20.6 23.7-24.7 15-34.9-.5-35.3-7.6c-.4-7.1 5-14.6 11.9-18 6.8-3.5 15.1-2.9 24-3.7 9-.8 18.6-2.9 23.3 1z"
        transform="translate(50 46) scale(1.34)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
};

export default Blob1;
