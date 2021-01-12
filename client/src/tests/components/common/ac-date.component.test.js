import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AcDate from '../../../components/common/ac-date.component';

it('renders with date', () => {
    render(<AcDate date='2020-07-17T13:36:20.000Z'/>);

    expect(screen.getByText('17/07/20')).toBeInTheDocument();
})