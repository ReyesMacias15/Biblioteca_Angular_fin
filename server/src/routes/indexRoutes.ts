import{Router}from'express';
import { indexController } from '../controllers/indexController';

class indexRoute{
   public router:Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', indexController.index);
      

        }

}
const indexRoutes=new indexRoute();
export default indexRoutes.router;
