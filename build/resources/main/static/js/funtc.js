Validator({
    form: '#form-1',
    errorSelector:'.error-message'
    , rule: [
        Validator.IsFullName('.fullName-input'),
        Validator.IsDate('.date-input'),
        Validator.IsSchool('.school-input'),
        Validator.IsPoint('.point-input'),
        Validator.IsPoint('.point-bonus-input ')
    ]
})

