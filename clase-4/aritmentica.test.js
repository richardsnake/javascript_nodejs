//import {sumar, PI} from './aritmetica.js'
//import { test } from "jest";
const ari = require("./trigonometria")


test('calcular el coseno de 1 y debe darme 0', ()=>{
    expect(ari.coseno(1)).toBe(0);
});

test('calcular el seno de 0 y debe darme 1', ()=>{
    expect(ari.seno(0)).toBe(1);
});

test('calcular el seno de otro angulo y debe darme 2', ()=>{
    expect(ari.seno(10)).toBe(2);
});

test('calcular el seno de otro angulo y debe darme 1', ()=>{
    expect(ari.coseno(90)).toBe(1);
});