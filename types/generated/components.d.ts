import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    signature: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsWhyFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_why_features';
  info: {
    displayName: 'Why Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media;
    titleItalic: Schema.Attribute.String & Schema.Attribute.Required;
    titleRegular: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.link': ElementsLink;
      'elements.testimonial': ElementsTestimonial;
      'elements.why-feature': ElementsWhyFeature;
    }
  }
}
