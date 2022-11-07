const provinceObj=document.querySelector('#province');
const districtObj=document.querySelector('#district');
const wardObj=document.querySelector('#ward');

fetch("./data_location/tinh_tp.json")
.then(response=>response.json())
.then(provinces=>{
    let options=` <option value="0"  class="form-select form-select-sm">Chọn Tỉnh/Thành phố</option>`
    if(Object.keys(provinces).length){
        Object.keys(provinces).forEach(code=>{
        const province=provinces[code];
        options+=` <option value="${code}">${province.name_with_type}</option> \n`
        })
        // console.log(options);
    }
    provinceObj.innerHTML=options
    
})
provinceObj.addEventListener('change',(e)=>{
    const provinceID=e.target.value;
    if(provinceID){
        fetch("./data_location/quan_huyen.json")
        .then(response=>response.json())
        .then(districts=>{
            let options=` <option value="0"  class="form-select form-select-sm">Chọn Quận/Huyện</option>`
            if(Object.keys(districts).length){
                Object.keys(districts).forEach(code=>{
                const district=districts[code];
                 if(district.parent_code==provinceID){
                    options+=` <option value="${code}">${district.name_with_type}</option> \n`
                }
               
                })
            }
            districtObj.innerHTML=options;
            wardObj.innerHTML=` <option value="0"  class="form-select form-select-sm">Chọn Xã/Phường</option>`
        })
    }
})


districtObj.addEventListener('change',(e)=>{
    const districtID=e.target.value;
    if(districtID){
        fetch("./data_location/xa_phuong.json")
        .then(response=>response.json())
        .then(wards=>{
            let options=` <option value="0"  class="form-select form-select-sm">Chọn Xã/Phường</option>`
            if(Object.keys(wards).length){
                Object.keys(wards).forEach(code=>{
                const ward=wards[code];
                
                 if(ward.parent_code==districtID&&districtID){
                    options+=` <option value="${code}">${ward.name_with_type}</option> \n`
                }
               
                })
            }
            wardObj.innerHTML=options
        })
    }
})  