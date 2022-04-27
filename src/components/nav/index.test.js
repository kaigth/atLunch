import React from "react";
import { render } from '@testing-library/react';
import Nav from '.';
import { initialize } from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();
});

describe('Nav', () => {
  test('matches snapshot', () => {
    const { container } = render(<Nav />)

    expect(container).toMatchSnapshot();
  });
});
