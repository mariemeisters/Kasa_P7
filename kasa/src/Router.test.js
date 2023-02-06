import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import APropos from './pages/A-Propos';
import { MemoryRouter } from 'react-router-dom';

test('renders correct route Home', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
        <Home />
        </MemoryRouter>
    );

    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument();
});

test('renders correct route a-propos', () => {
    render(
        <MemoryRouter initialEntries={['/a-propos']}>
        <APropos />
        </MemoryRouter>
    );

    expect(screen.getByText('Fiabilité')).toBeInTheDocument();
});

test('renders correct route erreur', () => {
    render(
        <MemoryRouter initialEntries={['/*']}>
          <Error404 />
        </MemoryRouter>
    );
    
    expect(screen.getByText("Oups! La page que vous demandez n'existe pas.")).toBeInTheDocument();
});
