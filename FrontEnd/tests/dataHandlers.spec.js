import { putBioDataHandler, getData } from '../utils/dataHandlers.js';
import { putBioDataService, getUserData } from '../utils/dataService.js';
import mockTestData from './mockTestData.json';

vi.mock('../utils/dataService');

describe('getData Tests', () => {
    it('should return data when getUserData succeeds', async () => {
        // Arrange
        const mockData = mockTestData.bio;
        getUserData.mockResolvedValue(mockData);

        // Act
        const result = await getData();

        // Assert
        expect(result).toEqual(mockData);
        expect(getUserData).toHaveBeenCalled();
    });

    it('should handle error when fetching user data', async () => {
        // Arrange
        const expectedErrorMessage = 'Error fetching user data';
        const errorResponse = { error: { message: expectedErrorMessage } };
        getUserData.mockResolvedValue(errorResponse);

        // Act
        const result = await getData();

        // Assert
        expect(result).toEqual(expectedErrorMessage);
        expect(getUserData).toHaveBeenCalled();
    });
});

describe('putBioDataHandler Tests', () => {
    it('should handle successful bio data update', async () => {
        // Arrange
        const mockBio = mockTestData.bio;
        const expectedResult = { success: true };
        putBioDataService.mockResolvedValue(expectedResult);

        // Act
        const result = await putBioDataHandler(mockBio);

        // Assert
        expect(result).toEqual(expectedResult);
        expect(putBioDataService).toHaveBeenCalledWith(mockBio);
    });

    it('should handle bio data update error', async () => {
        // Arrange
        const mockBio = mockTestData.bio;
        const expectedErrorMessage = 'Bio update failed';
        const errorResponse = { error: { message: expectedErrorMessage } };
        putBioDataService.mockResolvedValue(errorResponse);

        // Act
        const result = await putBioDataHandler(mockBio);

        // Assert
        expect(result).toEqual(expectedErrorMessage);
        expect(putBioDataService).toHaveBeenCalledWith(mockBio);
    });
});
