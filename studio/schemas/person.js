import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter your "Firstname"',
    }),
    defineField({
      name: 'surname',
      title: 'Surname',
      type: 'string',
      description: 'Enter your "Lastname"',
    }),
    defineField({
      name: 'birthDate',
      title: 'Birth date',
      type: 'datetime',
    }),
    defineField({
      name: 'power',
      title: 'Power',
      type: 'string',
      options: {
        list: [
          {title: 'Super Speed', value: 'superSpeed'},
          {title: 'Solar Energy Absorption', value: 'energyAbsorption'},
          {title: 'Shapeshifting', value: 'shapeshifting'},
          {title: 'Super Strength', value: 'superStrength'},
          {title: 'Teleportation', value: 'teleportation'},
          {title: 'Immortality', value: 'immortality'},
          {title: 'Invisibility', value: 'invisibility'},
          {title: 'Flight', value: 'flight'},
          {title: 'Healing factor', value: 'healingFactor'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
