// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},

	content: {
		markdown: {
			remarkPlugins: {
				'remark-emoji': {
					emoticon: true
				},
				// Disable remark-gfm
				'remark-gfm': false,
			}
		},
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
			titleTemplate: (titleChunk: any) => {
				return titleChunk ? `${titleChunk} • Catatan Cak Adi` : "Catatan Cak Adi";
			},
			meta: [
				{ name: 'color-scheme', content: 'dark' }
			],
			htmlAttrs: {
				lang: "id"
			},
			script: [
				{ src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js' },
				{ src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js' }
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
		'nuxt-icon',
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
	],
})