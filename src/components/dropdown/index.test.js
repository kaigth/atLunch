import React from "react";
import { render } from '@testing-library/react';
import DropDown from '.';

describe('DropDown', () => {
    test('matches snapshot', () => {
        const { container } = render(<DropDown />)

        expect(container).toMatchSnapshot();
    });
});
