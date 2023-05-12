import {message} from "antd";

export function dealError(e){
   if(e.message&&e.message.indexOf('{')>0){
      try{
         const errMsg = JSON.parse(e.message.substr(e.message.indexOf('{'),e.message.length))
         return errMsg.message
      }catch (e){
         console.log(e)
      }
   }else if(e.message.indexOf('(')>0){
      return e.message.substr(0,e.message.indexOf(' ('))
   }else{
      return e.message
   }

}
