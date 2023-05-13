import $ from  'jquery'
export  function  getSign(data){
    return $.ajax({
        type:"post",
        url:'http://47.98.46.3:9528/index.php?action=sign' ,
        data:data
    })
}
export function daoRegister(data){
    return $.ajax({
        type:"post",
        url:'http://47.98.46.3:9528/index.php?action=daoregister' ,
        data:data
    })
}
