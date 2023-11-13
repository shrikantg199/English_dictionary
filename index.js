const input = document.getElementById("search");
const infotext=document.getElementById("info-cont")
const title=document.getElementById("title")
const meaning=document.getElementById("meaning")
const audio=document.getElementById("controls")
async function fetchAPI(word){
    infotext.style.display="block"
    infotext.style.display="none"
    infotext.innerHTML=`searching meaning of ${word}`
    const Url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(Url).then((res) => res.json());
    console.log(result)
    infotext.style.display="none"
    
    title.innerHTML=result[0].word;
    meaning.innerHTML=result[0].meanings[0].definitions[0].definition;
    audio.src=result[0].phonetics[0].audio;
}
input.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==="Enter")
   {
    fetchAPI(e.target.value)
   }
})