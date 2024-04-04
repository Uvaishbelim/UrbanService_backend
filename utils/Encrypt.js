const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptpassword =(password)=>{

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedpassword = bcrypt.hashSync(password,salt)
    return hashedpassword;

}

const comparepassword =(password,hash)=>{

    const flag = bcrypt.compareSync(password,hash)
    return flag;

}
module.exports={
    encryptpassword,
    comparepassword
}