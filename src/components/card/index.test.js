import React from "react";
import { render } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
    test('matches snapshot', () => {
        const { container } = render(<Card />)

        expect(container).toMatchSnapshot();
    });
});
