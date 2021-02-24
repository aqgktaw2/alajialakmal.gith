const Blob4 = (props) => {
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
        d="M27.8-32.7c7 5.5 10.6 15.4 11.9 25.4 1.4 9.9.5 20-3.8 28.6-4.3 8.6-12.1 15.7-21.1 18.8C5.7 43.2-4.6 42.2-11 37c-6.5-5.2-8.9-14.7-13-22.7-4-8-9.7-14.6-9.4-20.9.3-6.2 6.5-12.1 13.1-17.6 6.6-5.5 13.4-10.7 22.1-12.7 8.6-2.1 19-1.2 26 4.2z"
        transform="translate(45 48) scale(1.22)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
};

export default Blob4;
