module.exports = {
  siteMetadata: {
    title: 'Positiva App | Salud estable y vida positiva.',
    author: 'positivaapp',
    siteUrl: 'https://positiva-app.com',
    image: '/cover.jpg',
    description:
      'Una plataforma segura para mejorar la calidad de vida de personas con VIH. Monitorea tu salud y únete a nuestra comunidad.',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            subsets: [`latin`],
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Postiva`,
        short_name: `Positiva`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
