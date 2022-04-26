import React from "react";
import { render } from '@testing-library/react';
import InfoCard from '.';

describe('InfoCard', () => {
  test('matches snapshot', () => {
    const { container } = render(<InfoCard />)

    expect(container).toMatchSnapshot();
  });
});
