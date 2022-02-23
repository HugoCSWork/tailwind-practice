module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				75: '18.75rem',
				62.5: '15.625rem'
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				5: '5px',
				6: '6px',
				8: '8px'
			},
			colors: {
				sidebar: '#040b14',
				'profile-border': '#2c2f3f',
				social: '#212431',
				social_hover: '#149ddd',
				nav_text: '#a8a9b4',
				nav_active: '#149ddd'
			},
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif']
			}
		}
	},
	plugins: []
};
