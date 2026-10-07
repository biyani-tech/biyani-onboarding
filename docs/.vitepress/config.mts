import { defineConfig } from 'vitepress'

// Change these two lines when you fork or rename the repo.
const repo = 'https://github.com/biyani-tech/biyani-onboarding'
const base = process.env.BASE ?? '/biyani-onboarding/'

export default defineConfig({
  base,
  lang: 'en-IN',
  title: 'Biyani Onboarding',
  description: 'Everything a new team member at Biyani Technologies needs, step by step.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap' }],
  ],

  themeConfig: {
    logo: { src: '/favicon.svg', alt: '' },
    siteTitle: 'Biyani Onboarding',

    nav: [
      { text: 'Start here', link: '/start/' },
      { text: 'Learn', link: '/learn/ai-fundamentals' },
      { text: 'Training', link: '/training/ai-sprint' },
      { text: 'Handbook', link: '/handbook/ai-and-data-rules' },
    ],

    // To add a page: create the .md file, then add one line here.
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'How onboarding works', link: '/start/' },
          { text: 'Who we are', link: '/company/' },
          { text: 'What we build', link: '/company/products' },
          { text: 'Where our tech is heading', link: '/company/tech-direction' },
        ],
      },
      {
        text: 'Your first weeks',
        items: [
          { text: 'Before you join', link: '/onboarding/before-you-join' },
          { text: 'Day 1', link: '/onboarding/day-1' },
          { text: 'Set up your laptop', link: '/onboarding/setup' },
        ],
      },
      {
        text: 'Learn',
        items: [
          { text: 'Git and GitHub', link: '/learn/git-github' },
          { text: 'AI fundamentals', link: '/learn/ai-fundamentals' },
          { text: 'AI coding tools compared', link: '/learn/ai-tools' },
          { text: 'Free courses', link: '/learn/courses' },
        ],
      },
      {
        text: 'Training',
        items: [
          { text: '3-day AI sprint', link: '/training/ai-sprint' },
          { text: 'Timetable stack challenge', link: '/training/timetable-challenge' },
        ],
      },
      {
        text: 'Handbook',
        items: [
          { text: 'AI and data rules', link: '/handbook/ai-and-data-rules' },
          { text: 'How we communicate', link: '/handbook/communication' },
          { text: 'Your first 90 days', link: '/handbook/first-90-days' },
          { text: 'Who to ask', link: '/handbook/team' },
          { text: 'Glossary', link: '/handbook/glossary' },
        ],
      },
      {
        text: 'Keep this site alive',
        items: [{ text: 'How to update this site', link: '/contributing' }],
      },
    ],

    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Suggest a change to this page' },
    lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'medium' } },
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: { message: 'Maintained by the Biyani Technologies engineering team. Spotted something out of date? Fix it, it is just Markdown.' },
  },
})
