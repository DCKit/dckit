import * as React from 'react';
import { Formik, Form } from 'formik';
import renderer from 'react-test-renderer';
import MenuItem from '@material-ui/core/MenuItem';

import { Select } from '../Select';

test('Select Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Select name="test">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
