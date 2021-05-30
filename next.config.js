module.exports = {
	future: {
		webpack5: true,
	},

	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},

	images: {
		domains: ["via.placeholder.com"],
	},

	// Fix router hangs in dev
	// onDemandEntries: {
	// 	// period (in ms) where the server will keep pages in the buffer
	// 	maxInactiveAge: 25 * 1000,
	// 	// number of pages that should be kept simultaneously without being disposed
	// 	pagesBufferLength: 5,
	// },
};
