"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BibliotecaController_1 = __importDefault(require("../controllers/BibliotecaController"));
class BibliotecaRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', BibliotecaController_1.default.index);
        this.router.post('/comentario', BibliotecaController_1.default.create_comen);
        this.router.post('/sesion', BibliotecaController_1.default.buscar);
        this.router.post('/registro', BibliotecaController_1.default.registro);
        this.router.post('/Buscar', BibliotecaController_1.default.Buscar);
        this.router.post('/perfil', BibliotecaController_1.default.perfil);
        this.router.post('/perfil/VER', BibliotecaController_1.default.VER);
    }
}
const bibliotecaroute = new BibliotecaRoute();
exports.default = bibliotecaroute.router;
