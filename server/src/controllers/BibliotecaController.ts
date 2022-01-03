import { Request, Response } from 'express';
import pool from '../database'
class BibliotecaController{
    public async index (request: Request, res:Response){
        const games = await pool.query('SELECT * FROM usuarios');
        res.json(games);
        console.log(games);
    }
    public async create_comen(req: Request, res: Response) {
        const result = await pool.query('INSERT INTO comentario set ?', [req.body]);
     

       
      res.json({text: 'creando juego'});
      
  }
  public async buscar(req: Request, res: Response) {
    const{Correo,CONTRASENA}=req.body;
    const games = await pool.query('SELECT `ID`, `TIP_ID_TIPO`, `NOMBRE_USUARIO` FROM usuarios WHERE `CORREO`= ? and `CONTRASENA`= ? ',[Correo,CONTRASENA]);
    res.json(games);


  
}
public async registro(req: Request, res: Response) {
 console.log([req.body]);
 const result = await pool.query('INSERT INTO usuarios SET ?',[req.body]);
res.json({text: 'creando juego'});

}


public async perfil(req: Request, res: Response) {
  console.log([req.body]);
  const{ID}=req.body;
  console.log([ID]);
  const result = await pool.query('update  usuarios SET ? WHERE `ID`='+[ID],[req.body]);
 res.json({result});
 
 }
 
 public async VER(req: Request, res: Response) {
 
  const{ID}=req.body;

  const result = await pool.query('SELECT * FROM  `usuarios` WHERE `ID`='+[ID]);
  res.json(result);
 
 }

public async Buscar(req: Request, res: Response) {
  console.log([req.body]);
  const{Nombre}=req.body;
  const result = await pool.query('SELECT `COD_DOCUMENTO`, `ID_AUTORES`, `CATEGORIAS`, `NOMBRE_EDITORIAL`,`imagen`, `TITULO`, `ANO` FROM `documentos_digitales`INNER JOIN `categorias` ON categorias.ID_CATEGORIAS = documentos_digitales.ID_CATEGORIAS INNER JOIN `editoriales` ON editoriales.ID_EDITORIALES = documentos_digitales.ID_EDITORIALES WHERE `TITULO` like '+"'%"+[Nombre] +"%'"+'');
 res.json( result);
 
 }

}


  const bibliotecacontroller= new BibliotecaController();
  export default bibliotecacontroller;