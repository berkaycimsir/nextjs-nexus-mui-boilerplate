import path from 'path';

import { makeSchema, nonNull, queryField, stringArg } from 'nexus';

const HelloQuery = queryField('hello', {
  type: nonNull('String'),
  args: {
    name: nonNull(stringArg()),
  },
  resolve: (_, { name }) => `Hello ${name}`,
});

export const schema = makeSchema({
  types: [HelloQuery],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql'),
  },
}) as any;
