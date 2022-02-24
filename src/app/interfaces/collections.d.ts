export interface CollectionRaw {
    collection: string,
    meta: {
      collection: string,
      icon: string,
      note: string,
      display_template: string,
      hidden: false,
      singleton: false,
      translations: string,
      archive_field: string,
      archive_app_filter: true,
      archive_value: string,
      unarchive_value: string,
      sort_field: string,
      accountability: string,
      color: string,
      item_duplication_fields: string,
      sort: string,
      group: string,
      collapse: string
    },
    schema: {
      name: string,
      schema: string,
      comment: string
    }
}

export interface Collection {
  name: string,
  color: string
}