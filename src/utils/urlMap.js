let env = process.env.NODE_ENV
console.log(env)
let URLADDRESS

if(env==="testproduction"){
    URLADDRESS = {
        forum:"http://forumtest.firedao.co/"
    };
}else{
    URLADDRESS = {
        forum:"http://forumtest.firedao.co/"
    };
}

export default URLADDRESS
