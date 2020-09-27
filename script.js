//selectors 
const inputSearch=document.querySelector('#input-search');
const searchButton=document.querySelector('#search-btn');


const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];




document.addEventListener('DOMContentLoaded',()=>{
    inputSearch.focus();
    showWeather('Siwan');
    showTime();
   
});

inputSearch.addEventListener('keydown',(e)=>{
   if(e.key==='Enter')
   {
    searchButton.focus();
    searchButton.style.backgroundColor='crimson';
    searchButton.style.color='#fff';
   }
}    
);
searchButton.addEventListener('keydown',(e)=>{
    if(e.key==='Enter')
    {
     if(inputSearch.value)   
     showWeather(inputSearch.value);
     else
     inputSearch.placeholder='Type City Name'
    }
 }    
 );


 function showWeather(city_name)
 {
const APIKey='b789ec1ef8ef9d99995d72b2f622a386';     
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${APIKey}`;
fetch(url).then(response=>response.json()).then(data=>{
const {main,weather}=data;
const temperature=Math.floor(main.temp)+' &#8451;';
const weathericonsrc=` http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
console.log(main);
console.log(weather);
const maxTemp=Math.floor(main.temp_min)+' &#8451;';
const minTemp=Math.floor(main.temp_max)+' &#8451;';
document.querySelector('#temp_icon').src=weathericonsrc;
document.querySelector('#description').innerHTML=weather[0].description;
document.querySelector('#temp').innerHTML=temperature;
document.querySelector('#city').innerHTML=city_name;
document.querySelector('#max-temp').innerHTML=maxTemp;
document.querySelector('#min-temp').innerHTML=minTemp;


inputSearch.value='';
searchButton.style.backgroundColor='#111';
searchButton.style.color='crimson';

}).catch(err=>console.log(err));

 }


 function showTime()
 {
     setInterval(()=>{
        document.querySelector('#time').innerHTML=new Date().toLocaleTimeString();
        document.querySelector('#day').innerHTML=days[new Date().getDay()];
        document.querySelector('#date').innerHTML=`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
     },1000);
 }