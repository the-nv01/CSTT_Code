// 


const fullNameObj=document.querySelector('.fullName');



//

function Validator(optionForm){

    const formSubmitObj=document.querySelector(optionForm.form);
    const Options=optionForm.rule;
    
    function validate(inputEle,rule){
        const errorEle= inputEle.parentElement.parentElement.querySelector(optionForm.errorSelector)
        const ErrorMessage=rule.test(inputEle.value)
        if(ErrorMessage){
         errorEle.innerText=ErrorMessage;
         errorEle.classList.add('input-group-name-error');
         inputEle.classList.add('is-invalid')
        }else{
         errorEle.innerText='';
         errorEle.classList.remove('input-group-name-error');
         inputEle.classList.remove('is-invalid')
        }
    }

    if(formSubmitObj){
        Options.forEach(function(rule){
            const inputEle=formSubmitObj.querySelector(rule.selector);
            
           
           if(inputEle){
            inputEle.addEventListener('blur',()=>{
                   validate(inputEle,rule)
            })
           }

           //xử lí mỗi nhập
           inputEle.addEventListener('input',()=>{
            const errorEle= inputEle.parentElement.parentElement.querySelector(optionForm.errorSelector)
            errorEle.innerText='';
            errorEle.classList.remove('input-group-name-error');
            inputEle.classList.remove('is-invalid')
           })

        })
    }


    
    


}
Validator.IsFullName =function(selector){
    return{
        selector:selector,
        test: function(value) {
            return value.trim()?undefined:`Nhập lại `;
        }   


    }
}
Validator.IsDate=(selector)=>{
    return{
        selector:selector,
        test: function(value) {
            var regex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
            return regex.test(value.trim())?undefined:'Vui lòng nhập lại Ngày-tháng-Năm'
        }
    }
}
Validator.IsPoint=(selector)=>{
    return{
        selector:selector,
        test: function(value) {
            var regex=/^[0-9]+\\.?[0-9]*$/
            return regex.test(value.trim())?undefined:'Vui lòng nhập lại Ngày-tháng-Năm'
        }
    }
}
Validator.IsSchool =function(selector){
    return{
        selector:selector,
        test: function(value) {
            return value.trim()?undefined:`Nhập lại `;
        }   


    }
}
// icons.classList.add('hide')

const icons =document.querySelector('.box-icons')
const message_icons=icons.querySelector('.svg-message ')
const genderObj=document.querySelector('.user .gender-box .gender-user')

const changeInput=genderObj.querySelectorAll('input')
changeInput.forEach(function(itemInput){
    itemInput.addEventListener('change',function(e){
            const valueInput=e.target.value;
          
            if(valueInput=='male'){
                
                icons.innerHTML=``
            }else{
                icons.innerHTML=``
            }
    })
})


