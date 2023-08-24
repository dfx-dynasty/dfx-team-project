import { render, screen, fireEvent } from '@testing-library/react';
import { BioFormModal } from '../src/components/Profile/BioFormModal';
import mockTestData from './mockTestData.json';

describe('BioFormModal Tests', () => {
    it('should render the modal when isOpen is true', () => {
        // Arrange
        const mockBio = mockTestData.bio;

        // Act
        render(<BioFormModal isOpen={true} onClose={() => { }} bio={mockBio} />);

        // Assert
        expect(screen.getByText('Edit bio')).toBeInTheDocument();
        expect(screen.getByLabelText('Profile Image URL:')).toBeInTheDocument();
    });

    it('should close the modal when Cancel button is clicked', () => {
        // Arrange
        let onCloseMockCalled = false;
        const onCloseMock = () => {
            onCloseMockCalled = true;
        };
        const mockBio = mockTestData.bio;

        // Act
        render(<BioFormModal isOpen={true} onClose={onCloseMock} bio={mockBio} />);
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        // Assert
        expect(onCloseMockCalled).toBe(true);
    });
});