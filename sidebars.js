module.exports = {
  // do not auto-generate a sidebar from the docs folder structure
  //sidebar: [{type: 'autogenerated', dirName: '.'}],

  // create a sidebar manually
  sidebar: [
    'index',
    {
      'Authorization Basics': [
        'authorization-basics/authz-vs-authn',
        'authorization-basics/fundamentals',
        {
          'Authorization Models': [
            'authorization-basics/authorization-models/rbac'
          ]
        },
        {
          'type': 'link',
          'label': 'Glossary',
          'href': 'https://www.aserto.com/ref/glossary'
        }
      ]
    },
    {
      'Conceptual Overview': [
        'overview/introduction',
        'overview/authorizer',
        'overview/policy',
        'overview/directory',
        'overview/decision-logs',
        'overview/control-plane',
        'overview/connections',
        'overview/organization',
      ],
    },
    {
      Quickstarts: [
        'quickstarts/overview',
        {
          type: 'category',
          label: 'Todo',
          collapsed: true,
          items: [
            'quickstarts/todo/overview',
            'quickstarts/todo/download-backend',
            'quickstarts/todo/launch-frontend',
            'quickstarts/todo/todo-policy-tutorial',
          ],
        },
        {
          type: 'category',
          label: 'PeopleFinder',
          collapsed: true,
          items: [
            'getting-started/peoplefinder/peoplefinder-overview',
            'getting-started/peoplefinder/deploy-peoplefinder',
            'getting-started/peoplefinder/explore-peoplefinder',
            'getting-started/peoplefinder/understanding-policies',
            'getting-started/peoplefinder/modify-the-policy',
          ],
        },
        {
          type: 'category',
          label: 'React and Node',
          collapsed: true,
          items: [
            'quickstarts/react/overview',
            'quickstarts/react/adding-users',
            'quickstarts/react/application-setup',
            'quickstarts/react/service-setup',
            'quickstarts/react/update-the-application',
            'quickstarts/react/create-a-policy',
            'quickstarts/react/use-express-middleware',
            'quickstarts/react/support-more-roles',
            'quickstarts/react/conditional-ui-rendering',
          ],
        },
      ],
    },
    {
      Console: [
        'aserto-console/introduction',
        {
          type: 'category',
          label: 'Managing the Directory',
          collapsed: true,
          items: [
            'aserto-console/directory/overview',
            'aserto-console/directory/navigate-relation',
            'aserto-console/directory/add-group',
            'aserto-console/directory/create-object-type',
            'aserto-console/directory/create-relation-type',
            'aserto-console/directory/create-permission',
            'aserto-console/directory/add-relation',
            'aserto-console/directory/graphql-playground',
          ],
        },
        {
          type: 'category',
          label: 'Managing Connections',
          collapsed: true,
          items: [
            'aserto-console/connections/overview',
            {
              type: 'category',
              label: 'Identity Providers',
              collapsed: true,
              items: [
                'aserto-console/connections/setup-auth0',
                'aserto-console/connections/setup-azuread',
                'aserto-console/connections/setup-okta',
              ],
            },
            {
              type: 'category',
              label: 'Source Code Providers',
              collapsed: true,
              items: [
                'aserto-console/connections/setup-github',
                'aserto-console/connections/setup-gitlab',
              ],
            },
            {
              type: 'category',
              label: 'Container Registries',
              collapsed: true,
              items: ['aserto-console/connections/setup-ghcr'],
            },
            'aserto-console/connections/setup-edge',
          ],
        },
        'aserto-console/policies',
        'aserto-console/view-policies',
        'overview/policy-lifecycle',
        'decision-logs-guide/console',
        'aserto-console/manage-organizations',
      ],
    },
    {
      Deployment: [
        'local-deployment/overview',
        {
          'Edge Authorizers': [
            'edge-authorizers/overview',
            'edge-authorizers/deployment-and-operation',
            'edge-authorizers/security-and-management',
            `edge-authorizers/decision-logs`,
            'edge-authorizers/discovery-flow',
            'edge-authorizers/runtime-flow',
            'edge-authorizers/directory-synchronization',
          ],
        },
        {
          'Local Directory': [
            'local-deployment/local-directory/overview',
            'local-deployment/local-directory/helm-chart',
          ]
        }
      ]
    },
    {
      SDKs: [
        'software-development-kits/overview',
        {
          type: 'category',
          label: 'JavaScript',
          collapsed: true,
          items: [
            'software-development-kits/javascript/express',
            'software-development-kits/javascript/react',
            'software-development-kits/javascript/spa',
          ],
        },
        {
          type: 'category',
          label: 'Go',
          collapsed: true,
          items: [
            'software-development-kits/go/install',
            'software-development-kits/go/authorizer',
            {
              type: 'category',
              label: 'Middleware',
              collapsed: true,
              items: [
                'software-development-kits/go/middleware-http',
                'software-development-kits/go/middleware-grpc',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Python',
          collapsed: true,
          items: [
            'software-development-kits/python/api-client',
            'software-development-kits/python/flask',
            {
              type: 'category',
              label: 'Reference',
              collapsed: true,
              items: [
                'software-development-kits/python/identity-providers',
                'software-development-kits/python/authorizers',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Java',
          collapsed: true,
          items: [
            'software-development-kits/java/grpc-bindings',
            'software-development-kits/java/authorizer',
            'software-development-kits/java/middleware',
          ],
        },
        'software-development-kits/dotnetcore',
        {
          type: 'category',
          label: 'Ruby',
          collapsed: true,
          items: [
            'software-development-kits/ruby/middleware',
            'software-development-kits/ruby/rails',
            'software-development-kits/ruby/directory',
          ],
        },
      ],
    },
    {
      CLIs: [
        'command-line-interface/introduction',
        {
          type: 'category',
          label: 'Aserto CLI',
          collapsed: true,
          items: [
            'command-line-interface/aserto-cli/installation',
            'command-line-interface/aserto-cli/login',
            'command-line-interface/aserto-cli/policies',
            'command-line-interface/aserto-cli/connections',
            'command-line-interface/aserto-cli/directory',
            'command-line-interface/aserto-cli/decision-logs',
            'command-line-interface/aserto-cli/onebox',
            'command-line-interface/aserto-cli/control-plane',
          ],
        },
        {
          type: 'category',
          label: 'Policy CLI',
          collapsed: true,
          items: [
            'command-line-interface/policy-cli/download',
            'command-line-interface/policy-cli/login',
            'command-line-interface/policy-cli/init',
            'command-line-interface/policy-cli/build',
            'command-line-interface/policy-cli/images',
            'command-line-interface/policy-cli/tag',
            'command-line-interface/policy-cli/push',
            'command-line-interface/policy-cli/pull',
            'command-line-interface/policy-cli/rm',
            'command-line-interface/policy-cli/export',
            'command-line-interface/policy-cli/repl',
            'command-line-interface/policy-cli/sign',
          ],
        },
        {
          type: 'category',
          label: 'Directory Load CLI',
          collapsed: true,
          items: [
            'command-line-interface/ds-load-cli/installation',
            'command-line-interface/ds-load-cli/usage',
            'command-line-interface/ds-load-cli/transform',
            {
              type: 'category',
              label: 'Plugins',
              collapsed: true,
              items: [
                'command-line-interface/ds-load-cli/plugins/overview',
                'command-line-interface/ds-load-cli/plugins/auth0',
                'command-line-interface/ds-load-cli/plugins/azuread',
                'command-line-interface/ds-load-cli/plugins/cognito',
                'command-line-interface/ds-load-cli/plugins/google',
                'command-line-interface/ds-load-cli/plugins/okta',
                'command-line-interface/ds-load-cli/plugins/custom',
              ],
            },
          ],
        },
      ],
    },
    {
      'API Reference': [
        'api-reference',
        {
          Authorizer: [
            'authorizer-guide/overview',
            'authorizer-guide/authz',
            'authorizer-guide/is',
            'authorizer-guide/identity-context',
            'authorizer-guide/policy-context',
            'authorizer-guide/resource-context',
            'authorizer-guide/query',
            'authorizer-guide/display-state-map',
            'authorizer-guide/decisiontree',
            'authorizer-guide/policy',
            'authorizer-guide/built-ins',
            'authorizer-guide/grpc'
          ],
        },
        {
          'Decision Logs': [
            'decision-logs-guide/overview',
            {
              type: 'category',
              label: 'APIs',
              collapsed: true,
              items: [
                'decision-logs-guide/api/overview',
                'decision-logs-guide/api/decision-logs',
                'decision-logs-guide/api/query',
                'decision-logs-guide/api/decisions',
              ],
            },
            'decision-logs-guide/schemas',
            'decision-logs-guide/elk',
          ],
        },
        {
          Directory: [
            'directory-api-reference/overview',
            'directory-api-reference/graphql',
            'directory-api-reference/grpc',
          ],
        },
      ],
    },
    {
      Troubleshooting: [
        'troubleshooting/overview',
        'troubleshooting/existing-policy-cannot-be-added',
        'troubleshooting/leaked-secret-keys',
        'troubleshooting/github-connection-cannot-be-removed',
        'troubleshooting/policy-added-but-shows-error',
        'troubleshooting/errors-reference',
      ],
    },
  ],
}
