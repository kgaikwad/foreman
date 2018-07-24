export const searchLinkProp = {
  textValue: 'testUser',
  url: '/audits?search=type+%3D+user+and+auditable_id+%3D+1',
  id: 123,
};

export const actionsList = [
  {
    url: '/hosts/foo.example.com',
    title: __('Host details'),
    css_class: 'btn btn-default',
  },
  {
    url: '#',
    title: __('Revert'),
    css_class: 'btn btn-default disabled',
    disabled: true,
  },
];

export const TaxonomyProps = {
  isOrgEnabled: true,
  isLocEnabled: true,
  orgs: [
    {
      name: 'testOrg',
      url: '/organizations/1-testOrg/edit',
    },
  ],
  locs: [
    {
      name: 'testLoc',
      url: '/locations/1-testLoc/edit',
    },
  ],
};

export const AuditRecord = {
  action: 'update',
  action_display_name: 'updated',
  affected_locations: [
    {
      name: 'testLoc',
      url: '/locations/2-testLoc/edit',
    }],
  affected_organizations: [
    {
      name: 'testOrg',
      url: '/organizations/1-testOrg/edit',
    }],
  allowed_actions: [
    {
      css_class: 'btn btn-default',
      data: {
        'data-id': '1-test-template',
        'data-url': '/templates/provisioning_templates/1-test-template',
      },
      title: 'Revert',
    }],
  associated_id: null,
  associated_name: null,
  associated_type: null,
  audit_title: 'test-template',
  audit_title_url: '/audits?search=type+%3D+provisioning_template+and+auditable_id+%3D+1',
  auditable_id: 1,
  auditable_name: 'test-template',
  auditable_type: 'ProvisioningTemplate',
  audited_changes: {
    template: [
      '<h1>Hello..</h1>',
      '<h1>Hello World..</h1>',
    ],
  },
  audited_changes_with_id_to_label: [],
  audited_type_name: 'Provisioning Template',
  comment: null,
  creation_time: {
    title: '18 minutes ago',
    value: '13 Aug 00:34',
  },
  details: [],
  id: 123,
  remote_address: '127.0.0.1',
  request_uuid: '4bafc809-a0e9-43db-bee8-c7abfe44ad05',
  user_id: 4,
  user_info: {
    audit_path: '/audits?search=id+%3D+123',
    display_name: 'Admin ',
    login: 'admin',
    search_path: '/audits?search=user+%3D+admin',
  },
  user_type: null,
  username: 'Admin User',
  version: 20,
};

export const AuditsProps = {
  audits: [
    {
      action: 'update',
      action_display_name: 'updated',
      affected_locations: [
        {
          name: 'test_loc1',
          url: '/locations/2-test_loc1/edit',
        },
        {
          name: 'test_loc2',
          url: '/locations/6-test_loc2/edit',
        },
        {
          name: 'test_loc3',
          url: '/locations/9-test_loc3/edit',
        },
      ],
      affected_organizations: [
        {
          name: 'test_org1',
          url: '/organizations/1-test_org1/edit',
        },
        {
          name: 'test_org2',
          url: '/organizations/3-test_org2/edit',
        },
        {
          name: 'test_org3',
          url: '/organizations/5-test_org3/edit',
        },
      ],
      allowed_actions: [],
      associated_id: null,
      associated_name: null,
      associated_type: null,
      audit_title: 'foo',
      audit_title_url: '/audits?search=type+%3D+user+and+auditable_id+%3D+9',
      auditable_id: 9,
      auditable_name: 'foo',
      auditable_type: 'User',
      audited_changes: {
        location_ids: [
          [
            6, 9,
          ],
          [
            6, 9, 2,
          ],
        ],
        password: [
          '[redacted]',
          '[redacted]',
        ],
        role_ids: [
          [
            11, 8,
          ],
          [
            11, 8, 14, 13, 12,
          ],
        ],
      },
      audited_changes_with_id_to_label: [
        {
          change: [
            {
              css_class: 'show-old',
              id_to_label: '[redacted]',
            },
            {
              css_class: 'show-new',
              id_to_label: '[redacted]',
            },
          ],
          name: 'Password',
        },
        {
          change: [
            {
              css_class: 'show-old',
              id_to_label: 'N/A',
            },
            {
              css_class: 'show-new',
              id_to_label: 'N/A',
            },
          ],
          name: 'Role ids',
        },
      ],
      audited_type_name: 'User',
      comment: null,
      creation_time: {
        title: '14 days ago',
        value: '30 Jul 15:02',
      },
      id: 234,
      remote_address: '127.0.0.1',
      request_uuid: 'c134239d-8ac3-494b-9962-35133fe153ba',
      user_id: 4,
      user_info: {
        audit_path: '/audits?search=id+%3D+234',
        display_name: 'Admin ',
        login: 'admin',
        search_path: '/audits?search=user+%3D+admin',
      },
      user_type: null,
      username: 'Admin User',
      version: 2,
    },
  ],
  isLocEnabled: false,
  isOrgEnabled: true,
};
