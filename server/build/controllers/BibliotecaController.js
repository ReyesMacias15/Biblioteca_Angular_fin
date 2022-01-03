"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BibliotecaController {
    index(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(games);
            console.log(games);
        });
    }
    create_comen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO comentario set ?', [req.body]);
            res.json({ text: 'creando juego' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Correo, CONTRASENA } = req.body;
            const games = yield database_1.default.query('SELECT `ID`, `TIP_ID_TIPO`, `NOMBRE_USUARIO` FROM usuarios WHERE `CORREO`= ? and `CONTRASENA`= ? ', [Correo, CONTRASENA]);
            res.json(games);
        });
    }
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            const result = yield database_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ text: 'creando juego' });
        });
    }
    perfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            const { ID } = req.body;
            console.log([ID]);
            const result = yield database_1.default.query('update  usuarios SET ? WHERE `ID`=' + [ID], [req.body]);
            res.json({ result });
        });
    }
    VER(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID } = req.body;
            const result = yield database_1.default.query('SELECT * FROM  `usuarios` WHERE `ID`=' + [ID]);
            res.json(result);
        });
    }
    Buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            const { Nombre } = req.body;
            const result = yield database_1.default.query('SELECT `COD_DOCUMENTO`, `ID_AUTORES`, `CATEGORIAS`, `NOMBRE_EDITORIAL`,`imagen`, `TITULO`, `ANO` FROM `documentos_digitales`INNER JOIN `categorias` ON categorias.ID_CATEGORIAS = documentos_digitales.ID_CATEGORIAS INNER JOIN `editoriales` ON editoriales.ID_EDITORIALES = documentos_digitales.ID_EDITORIALES WHERE `TITULO` like ' + "'%" + [Nombre] + "%'" + '');
            res.json(result);
        });
    }
}
const bibliotecacontroller = new BibliotecaController();
exports.default = bibliotecacontroller;
