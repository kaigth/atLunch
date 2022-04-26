import React from "react";
import { render } from '@testing-library/react';
import Select from '.';

describe('Select', () => {
    test('matches snapshot', () => {
        const { container } = render(<Select />)

        expect(container).toMatchSnapshot();
    });
});
