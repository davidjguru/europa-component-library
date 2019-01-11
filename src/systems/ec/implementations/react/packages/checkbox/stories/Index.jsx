/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import demo from '@ecl/ec-specs-checkbox/demo/data';
import Checkbox from '../Checkbox';

storiesOf('Forms/Checkbox', module)
  .add('default', () => <Checkbox {...demo.default} />)
  .add('disabled', () => <Checkbox {...demo.disabled} />)
  .add('invalid', () => (
    <Checkbox {...demo.invalid} onClick={e => e.preventDefault()} />
  ));
