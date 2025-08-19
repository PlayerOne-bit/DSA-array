const sidebar = document.querySelector(".members");
const black=document.querySelector(".black");
const button=document.querySelector(".btn");

button.addEventListener('click',()=>{
    sidebar.classList.add("show");
    black.classList.add("show");
});

black.addEventListener("click",()=>{
    sidebar.classList.remove("show");
    black.classList.remove("show");
});

function submit(){
    let score=0;
    const questions = ['choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8','choice9','choice0'];
    questions.forEach(name=>{
        const answer=document.querySelector(`input[name="${name}"]:checked`);
        if(answer && answer.value==="correct"){
            score++;
        }
    });
    const congrats=document.querySelector(".nice");
    const result=document.querySelector(".result");
    const name=document.querySelector(".name").value;
    const course=document.querySelector(".course").value;
    const essay1=document.querySelector(".essay1").value;
    const essay2=document.querySelector(".essay2").value;
    congrats.innerHTML=`Congrats! ${(name==="")?"Guest":name} from ${(course==="")?"Nowhere":course}!`;
    result.innerHTML=`You got a score of <b style='font-size:1000%; color:lightgreen;'>${score}/10</b><br>But quiz checkers will still check your answers from essay:<br>11-12. ${(essay1==="")?"It's blank LOLOLOLOLOL!!!!!":essay1}<br>13-15. ${(essay2==="")?"Wow you didn't even tried to do your best ha?":essay2}`;


}