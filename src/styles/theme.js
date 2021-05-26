const theme = {
	color: {},

	background: {},

	transition: {},

	boxShadow: {},

	borderRadius: {},

	utils: {
		container: `
      width: 100%;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 4rem;
      padding-right: 4rem;
    `,

		section: `
      padding-top: 5rem;
      padding-bottom: 5rem;
    `,

		fancyLink: `
      position: relative;
      width: max-content;

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        height: 1.5px;
        left: 0;
        width: 0;
        background-color: var(--color-highlight);
        transition: var(--transition-standard);
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    `,
	},
};

export default theme;
