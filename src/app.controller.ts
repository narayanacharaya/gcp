import { Request, Response } from "express";
import { generalService } from "./app.generalServie";

;
export const handleClickRequest = async (    req: Request,
    res: Response,)=>{
    const userIp = req.ip!
    const buttonColor = req.params.color
    const sucess =await generalService(buttonColor,userIp)
   sucess? res.status(200).json({  
        message: `Clicked successfully for button color: ${buttonColor}`,
      }): res.status(200).json({  
        message: `Rate limit reached `,
      })
    

}