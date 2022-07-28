import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Button} from '..';
import userEvent from '@testing-library/user-event';

const mockFn = jest.fn()

const setup = (isLoading?: boolean, testId?: string) =>
    render(
        <Button onClick={mockFn} isLoading={isLoading} dataTestId={testId}>
            <div>{'mock'}</div>
        </Button>
    );

describe(Button.name, () => {
    it('Should display text of tag child ', () => {
        setup(false, 'testIdMock');
        expect(screen.getByTestId('testIdMock')).toBeInTheDocument();
        expect(screen.getByText('mock')).toBeInTheDocument();
    });

    it("Should NOT display text of tag child and should display 'Carregando' if isLoading is true", () => {
        setup(true);
        expect(screen.queryByText('mock')).not.toBeInTheDocument();
        expect(screen.queryByText('Carregando')).toBeInTheDocument();
    });

    it('Should call function if element is clicked ', async () => {
        setup(false, 'testIdMock');

        const button = screen.getByTestId('testIdMock')

        userEvent.click(button)

        await waitFor(()=> expect(mockFn).toBeCalled())

    });
});
