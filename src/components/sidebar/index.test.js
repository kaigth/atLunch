import React from "react";
import { render } from '@testing-library/react';
import SideBar from '.';
import { initialize } from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();
});

describe('SideBar', () => {
  test('matches snapshot', () => {
    const { container } = render(<SideBar />)

    expect(container).toMatchSnapshot();
  });
});
