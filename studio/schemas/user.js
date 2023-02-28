export default {
  name: 'user',
  title: 'User',
  type: 'document',
  initialValue: {
    usertype: "customer"
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      type: 'string',
      hidden: true
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: 'usertype',
      title: 'UserType',
      type: 'string',
      options: {
        list: [
          {title: 'Customer', value: 'customer'},
          {title: 'Admin', value: 'admin'},
        ], 
        layout: 'radio'
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};