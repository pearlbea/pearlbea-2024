import { render, screen } from "@testing-library/react";
import Home from './page.tsx';

describe('home', () => {

    it(
        'should have a headline', () => {
            render(<Home />)
            const element = screen.getByText('Home');
            expect(element).toBeTruthy();
        }
    )
})