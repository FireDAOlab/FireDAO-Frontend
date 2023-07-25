import {message, notification} from "antd";
const waitTime = 5
export function dealError(e){
   try{
      if (e &&e.code&& e.code === 4001) {
         message.error("User canceled  transaction");
         return;
      }
      if (e.message && e.message.indexOf("{") < 0) {
         message.error(e.message);
      } else {
         const err = JSON.parse(e.message.substring(e.message.indexOf("{"), e.message.length));
         if(err.originalError&&err.originalError.message){
            message.error(err.originalError.message);
         }else{
            message.error(err.message);
         }
      }
   }catch (e) {
      console.log(e)
   }

}
