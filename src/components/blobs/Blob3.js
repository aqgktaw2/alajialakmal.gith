const Blob3 = (props) => {
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
        d="M21-22.7c8.1 4.3 17.6 9.3 19.5 16.2 2 6.9-3.5 15.8-9.8 21.9-6.3 6.1-13.4 9.5-20.4 11.5-7.1 2-14.2 2.6-21.6 1.2-7.5-1.4-15.3-4.8-18.2-10.7-2.9-5.8-1-14.1.4-22.7 1.3-8.6 1.9-17.5 6.6-22.4 4.8-5 13.6-6 21.3-4.6C6.5-30.9 13-27.1 21-22.7z"
        transform="translate(44 53) scale(1.35)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
};

export default Blob3;
