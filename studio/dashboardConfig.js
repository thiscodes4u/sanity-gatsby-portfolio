export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6358979f6d323b35e4b7d4d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-31zwrnkm',
                  apiId: 'dedafa3d-2e61-4d27-8afb-5b6b9379aa8e'
                },
                {
                  buildHookId: '6358979f0ad955343a477ef3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6bpwh3ov',
                  apiId: '05747e93-6fba-4800-a586-2609078a9598'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thiscodes4u/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6bpwh3ov.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
