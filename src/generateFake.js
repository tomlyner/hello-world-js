import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';

export default function getFakeData() {
  return jsf(schema);
}
