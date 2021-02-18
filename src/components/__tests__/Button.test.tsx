import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

test('button should render', ()=> {
    const {getByRole} = render(<Button>Super bouton</Button>);
    expect(getByRole('button')).toHaveTextContent('Super bouton')
})