import React from "react";
import { render } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  test('matches snapshot', () => {
    const { container } = render(<Input />)

    expect(container).toMatchSnapshot();
  });
});
