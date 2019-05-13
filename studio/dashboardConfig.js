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
                  buildHookId: '5cd94a19374bf550a3df2eee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-or7ff5nj',
                  apiId: '64f87fae-6180-4da5-8c73-9d33dd741a10'
                },
                {
                  buildHookId: '5cd94a19374bf51fc2df2f84',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-unqrke4k',
                  apiId: 'b9712761-e2f7-4e0a-a83b-8ad3eecea54c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmskrtsz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-unqrke4k.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
