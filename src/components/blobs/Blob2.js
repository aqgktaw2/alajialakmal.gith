const Blob2 = (props) => {
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
        d="M28.6-33.8C36.3-27.7 41.2-17.9 40-9.3 38.8-.7 31.5 6.6 26 14c-5.4 7.4-9.1 14.7-14.9 17-5.7 2.2-13.4-.7-21.2-3.5-7.7-2.8-15.6-5.4-21.5-11.3s-9.8-15.1-7-21.6c2.9-6.5 12.5-10.4 20-16.5C-11-28-5.5-36.2 2.5-39.2c8-3 18.5-.6 26.1 5.4z"
        transform="translate(50 56) scale(1.23)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
};

export default Blob2;
