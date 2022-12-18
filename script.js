const country=document.getElementById('country');
const state =document.getElementById('state');
const button=document.getElementById('but');
const container=document.getElementById('container');
init()

function init(){
   
    button.addEventListener('click',getDetails);

}

async function getDetails(){
    const countryValue=country.value;
    const stateValue=state.value;
    const streamResponse = await fetch(`http://universities.hipolabs.com/search?country=${countryValue}`);
    const textResponse= await streamResponse.text();
    const JsonData= JSON.parse(textResponse);
    
   let JsonDataCopy=[...JsonData];

    JsonDataCopy=JsonDataCopy.filter((state1)=>{
        return state1.name.toLowerCase().includes(stateValue.toLowerCase())
    })
    let html=``;
   for(let i=0;i<JsonDataCopy.length;i++){

        html += `  <div class="details">
        <p class="stateName">${JsonDataCopy[i].country}</p>
        <p class="UniversityName">${JsonDataCopy[i].name}</p>
        <a href="${JsonDataCopy[i].web_pages[0]}">Visit Site</a>
    </div>`
    
    container.innerHTML=html;
   }

}



