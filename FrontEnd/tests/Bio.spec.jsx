import { render, screen } from '@testing-library/react';
import Bio from '../src/components/Profile/Bio.jsx';
import mockTestData from './mockTestData.json';

describe('Bio Component Tests', () => {
    it('should render user bio details', () => {
        // Arrange
        render(<Bio bioData={mockTestData.bio} />);

        const fullNameElement = screen.getByRole('heading', { name: /John Doe/i });
        const pronounsElement = screen.getByText('(he/him)');
        const nationalityElement = screen.getByAltText('British');
        const headlineElement = screen.getByText('Software Engineer - Maths Graduate - Python Programmer - Full Stack Dev - Speaks Spanish');
        const overviewElement = screen.getByText('Lorem ipsum');

        // Assert
        expect(fullNameElement).toBeInTheDocument();
        expect(pronounsElement).toBeInTheDocument();
        expect(nationalityElement).toBeInTheDocument();
        expect(headlineElement).toBeInTheDocument();
        expect(overviewElement).toBeInTheDocument();
    });
})