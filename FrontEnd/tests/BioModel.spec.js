import BioModel from '../utils/Bio.Model.js';
import mockTestData from './mockTestData.json';

describe('BioModel Tests', () => {
    it('should create a BioModel instance with correct properties', () => {
        // Arrange
        const mockId = { $oid: '64e492014bf1530e7e87f788' };
        const mockFirstname = mockTestData.bio.firstname;
        const mockLastname = mockTestData.bio.lastname;
        const mockHeadshot = mockTestData.bio.headshot;
        const mockNationality = mockTestData.bio.nationality;
        const mockPronouns = mockTestData.bio.pronouns;
        const mockHeadline = mockTestData.bio.headline;
        const mockOverview = mockTestData.bio.overview;
        const mockSocials = {
            youtube: mockTestData.bio.socials.youtube,
            github: mockTestData.bio.socials.github,
            linkedin: mockTestData.bio.socials.linkedin,
        };

        // Act
        const bioModel = new BioModel(
            mockId,
            mockFirstname,
            mockLastname,
            mockHeadshot,
            mockNationality,
            mockPronouns,
            mockHeadline,
            mockOverview,
            mockSocials
        );

        // Assert
        expect(bioModel).toBeInstanceOf(BioModel);
        expect(bioModel._id).toEqual(mockId);
        expect(bioModel.bio.firstname).toEqual(mockFirstname);
        expect(bioModel.bio.lastname).toEqual(mockLastname);
        expect(bioModel.bio.headshot).toEqual(mockHeadshot);
        expect(bioModel.bio.nationality).toEqual(mockNationality);
        expect(bioModel.bio.pronouns).toEqual(mockPronouns);
        expect(bioModel.bio.headline).toEqual(mockHeadline);
        expect(bioModel.bio.overview).toEqual(mockOverview);
        expect(bioModel.bio.socials).toEqual(mockSocials);
    });
});
