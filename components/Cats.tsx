import {Heading} from 'components/Heading';
import {Section} from 'components/Section';
import {Subheading} from './Subheading';

export const Cats = () => {
  return (
    <Section color="bg-gray-900">
      <Heading tag="h2">He has two cats</Heading>
      <Subheading>Their names are Ares and Athena.</Subheading>
    </Section>
  );
};
