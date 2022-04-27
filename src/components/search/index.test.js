import React from "react";
import { render } from '@testing-library/react';
import Search from '.';
import { initialize } from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();
});

describe('Search', () => {
  test('matches snapshot', () => {
    const { container } = render(<Search />)

    expect(container).toMatchSnapshot();
  });
});
