import React from "react";
import { render } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
    test('matches snapshot', () => {
        const { container } = render(<Button />)

        expect(container).toMatchSnapshot();
    });
});
