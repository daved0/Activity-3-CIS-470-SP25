
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
  //BVA-Equilateral
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });
    
    //BVA-Isosceles
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(1, 200, 200)).toBe('Isosceles');
      expect(classifyTriangle(2, 1, 2)).toBe('Isosceles');
      expect(classifyTriangle(200, 1, 200)).toBe('Isosceles');
      expect(classifyTriangle(200, 200, 1)).toBe('Isosceles');
    });
    
    //BVA-Scalene
    test('should classify an Scalene triangle', () => {
      expect(classifyTriangle(2, 200, 199)).toBe('Scalene');
      expect(classifyTriangle(200, 2, 199)).toBe('Scalene');
      expect(classifyTriangle(200, 199, 2)).toBe('Scalene');
    });
  //ECP-Equilateral
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
      expect(classifyTriangle(150, 150, 150)).toBe('Equilateral');
    });
    
    //ECP-Isosceles
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(50, 150, 150)).toBe('Isosceles');
      expect(classifyTriangle(51, 100, 51)).toBe('Isosceles');
      expect(classifyTriangle(20, 10, 20)).toBe('Isosceles');
      expect(classifyTriangle(175, 175, 100)).toBe('Isosceles');
    });
    
    //ECP-Scalene
    test('should classify an Scalene triangle', () => {
      expect(classifyTriangle(10, 35, 40)).toBe('Scalene');
      expect(classifyTriangle(100, 175, 150)).toBe('Scalene');
      expect(classifyTriangle(149, 100, 50)).toBe('Scalene');
    });
     
    
    //BVA-invalid C1, C2, or C3
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 0, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 200, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 201, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 200, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    //ECP-invalid C1, C2, or C3
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 150, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(-100, 30, 147)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(132, 79, 205)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    //BVA-not a triangle
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      expect(classifyTriangle(1, 1, 2)).toBe('Not a Triangle');
      expect(classifyTriangle(4, 2, 1)).toBe('Not a Triangle');
    });


    //ECP-not a triangle
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(50,50,101)).toBe('Not a Triangle');
    });
  });
  