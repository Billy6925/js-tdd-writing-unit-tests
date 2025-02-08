// Your tests here
import {pointsForWord} from '../utils';

describe('pointsForWord', () => {
    it('handles uppercase and lowercase input', () => {
        // Arrange
        const word = "tEsT";
        // Act
        const points = pointsForWord(word);
        //Assert
        expect(points).toBe(7);
    });
});