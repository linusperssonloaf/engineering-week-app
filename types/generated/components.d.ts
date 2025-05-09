import type { Schema, Struct } from '@strapi/strapi';

export interface EventGeoposition extends Struct.ComponentSchema {
  collectionName: 'components_event_geopositions';
  info: {
    displayName: 'Geoposition';
  };
  attributes: {
    latitud: Schema.Attribute.Decimal;
    longitud: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.geoposition': EventGeoposition;
    }
  }
}
