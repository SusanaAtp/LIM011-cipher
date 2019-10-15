/* eslint-disable no-undef */
global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('A BCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('H IJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "HiJKLMnOPQRSTUVWXYZABCDEFg" para "AbCDEFgHIJKLMNOPQRSTUVWXYz" con offset 33', () => {
      expect(cipher.encode('AbCDEFgHIJKLMNOPQRSTUVWXYz', 33)).toBe('HiJKLMnOPQRSTUVWXYZABCDEFg');
    });
    it('debería retornar "HiJK; .LMnOPQRSTUVWXYZABCDEFg" para "AbCD; .EFgHIJKLMNOPQRSTUVWXYz" con offset 33', () => {
      expect(cipher.encode('AbCD; .EFgHIJKLMNOPQRSTUVWXYz', 33)).toBe('HiJK; .LMnOPQRSTUVWXYZABCDEFg');
    });
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    it('debería retornar "aijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33)).toBe('hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "h ijklmnopqrstuvwxyzabcdefg" para "a bcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode('a bcdefghijklmnopqrstuvwxyz', 33)).toBe('h ijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "HijklmnopqrstuvwxyzabcdEfg" para "AbcdefghijklmnopqrstuvwXyz" with offset 33', () => {
      expect(cipher.encode('AbcdefghijklmnopqrstuvwXyz', 33)).toBe('HijklmnopqrstuvwxyzabcdEfg');
    });
    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "A BCDEFGHIJKLMNOPQRSTUVWXYZ" para "H IJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode('H IJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('A BCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "abCDEFgHIJKLMNOPQRSTUVWXYz" para "hiJKLMnOPQRSTUVWXYZABCDEFg" con offset 33', () => {
      expect(cipher.decode('hiJKLMnOPQRSTUVWXYZABCDEFg', 33)).toBe('abCDEFgHIJKLMNOPQRSTUVWXYz');
    });
    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    //
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33)).toBe('abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "a bcdefghijklmnopqrstuvwxyz" para "h ijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode('h ijklmnopqrstuvwxyzabcdefg', 33)).toBe('a bcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "TuvwxyzabcdefghijklmnopQrs" para "AbcdefghijklmnopqrstuvwXyz" with offset 33', () => {
      expect(cipher.decode('AbcdefghijklmnopqrstuvwXyz', 33)).toBe('TuvwxyzabcdefghijklmnopQrs');
    });
    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });
});
