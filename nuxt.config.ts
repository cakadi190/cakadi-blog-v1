// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: false,
		vscode: {
			reuseExistingServer: true
		}
	},
	delayHydration: {
		// enables nuxt-delay-hydration in dev mode for testing
		debug: process.env.NODE_ENV === 'development',
		mode: 'mount'
	},

	content: {
		highlight: {
			theme: 'monokai',
			langs: [
				'javascript',
				'typescript',
				'bash',
				'php',
				'apache',
				'c',
				'cpp',
				'java',
				'js', 'jsx', 'json', 'ts', 'tsx', 'vue', 'css', 'html', 'vue', 'bash', 'md', 'mdc', 'yaml', 'blade', 'json'
			]
		}
	},

	css: [
		'~/assets/scss/app.scss',
	],

	app: {
		head: {
			meta: [
				{ name: 'color-scheme', content: 'dark' },
				{ property: 'og:type', content: 'website' },
				// For GAds
				{ name: 'google-adsense-account', content: 'ca-pub-8792210593151937' }
			],
			htmlAttrs: {
				lang: "id"
			},
			script: [
				{ tagPosition: 'bodyClose', src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js' },
				{ tagPosition: 'bodyClose', src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js' },
				{
					async: true,
					tagPosition: 'bodyClose', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8792210593151937',
					crossorigin: 'anonymous',
					defer: true,
				}
			]
		}
	},

	nitro: {
		prerender: {
			crawlLinks: true,
			failOnError: false,
		},
	},
	modules: [
		'nuxt-delay-hydration',
		'nuxt-icon',
		'nuxt-swiper',
		"@nuxt/image",
		'@nuxtjs/color-mode',
		'nuxt-gravatar',
		'@nuxt/content',
		'dayjs-nuxt',
		["nuxt-disqus", {
			shortname: 'catatancakadi',
			debug: true,
		}],
		["@nuxtjs/google-fonts", {
			families: {
				Signika: true,
				'Fira Code': true,
				Merriweather: true
			},
			download: true,
			base64: true,
			display: 'swap',
			preload: true,
			useStylesheet: true,
			overwriting: true,
			inject: true,
		}],
		"@stefanobartoletti/nuxt-social-share"
	],
})