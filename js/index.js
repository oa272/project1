let siteNameInput = document.getElementById("sitename");
let siteUrlInput = document.getElementById("siteurl");
let siteList = [];
if(localStorage.getItem("siteinner") !== null){
    siteList = JSON.parse(localStorage.getItem("siteinner"));
    displayData();
}
function addProduct(){
if(validationName()&&validationUrl()){
    let product = {
        name : siteNameInput.value,
        url : siteUrlInput.value,
    };
    siteList.push(product);
    localStorage.setItem("siteinner", JSON.stringify(siteList));
    displayData();
    clearForm();
}
}
function clearForm(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
}
function displayData(){
    let x = ""
    for(let i = 0; i < siteList.length ; i++){
        x += `<tr>
                <td>${i + 1}</td>
                <td>${siteList[i].name}</td>  
                <td>${siteList[i].url}</td>            
                <td>
                 <a href="${siteList[i].url}" target="_blank" class=" btn-visit btn btn-sm "><i class="fa-solid fa-eye"></i> Visit </a>
                </td>
                <td>
                  <button onclick="deleteData(${i})" class="btn btn-sm btn-delete pe-2">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>`;
    }
    document.getElementById("tableContent").innerHTML = x ;
}
function deleteData(index){
   siteList.splice(index , 1)
   displayData();
   localStorage.setItem("siteinner", JSON.stringify(siteList));
}
function validationName(){
   let regex = /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/;
   let text = siteNameInput.value;
   let namee = document.getElementById("mss");
   if(regex.test(text)){
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    namee.classList.add("d-none");
    return true
   }
   else{
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    namee.classList.remove("d-none");
    return false
   }
}
function validationUrl(){
    let regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    let text = siteUrlInput.value;
    let urll = document.getElementById("ms");
    if(regex.test(text)){
        siteUrlInput.classList.add("is-valid");
        siteUrlInput.classList.remove("is-invalid");
        urll.classList.add("d-none");
        return true
    }
    else{
        siteUrlInput.classList.add("is-invalid");
        siteUrlInput.classList.remove("is-valid");
        urll.classList.remove("d-none");
        return false
    }
 }
 
