// these are the 2 ways to make a regular expression in js
//const reg =/[a-z]/gi;

//const other_reg = new RegExp(/[a-z]/, 'i');


const inputs = document.querySelectorAll('input');

const patterns  = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/ig,
    slug: /^[a-z\d-]{8,12}$/, 
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
// cannot use inputs.addEventListener because variable inputs is a collection of All

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
        
        //console.log(e.target.attributes.name.value);
        valid(e.target,patterns[e.target.attributes.name.value])
    });
});

function valid(field, regex){
    //places a valid or invalid classname onto element if regex.test returns true
    if (regex.test(field.value)){
        field.className='valid'
    }else {
        field.className='invalid'
    };
}