import {
 message
} from 'antd';
export function  handleCopy(text) {
    try{
        const clipboardObj = navigator.clipboard
        clipboardObj.writeText(text)
        clipboardObj.readText().then(res=>{
            message.success("Copy address success: "+res)
        }).catch((error) => {
            message.warn("Copy failed：" +error,5);
        });
    }catch (e) {
        message.warn("Copy failed：" +e,3)

    }
}
