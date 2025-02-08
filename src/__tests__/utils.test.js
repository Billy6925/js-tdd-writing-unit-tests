// Your tests here
import {pointsForWord} from '../utils';

describe('pointsForWord', () => {
    it('calcultes the total points for a word(1 point per vowel, 2 points per consonant)', () => {
        // Arrange
        const word = "test";
        // Act
        const points = pointsForWord(word);
        //Assert
        expect(points).toBe(7);
    });
});