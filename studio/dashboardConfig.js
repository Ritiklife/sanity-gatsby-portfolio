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
                  buildHookId: '629eff869d52b83c651803c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-k9aawiei',
                  apiId: '0ff3d2f0-f244-4ffb-846a-4bddee0446ff'
                },
                {
                  buildHookId: '629eff86ec2c4c356d09c522',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-km7sbpdr',
                  apiId: '9280f0bd-7a06-4e93-9322-029afcd34c17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ritiklife/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-km7sbpdr.netlify.app',
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
