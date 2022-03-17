const btnEl = document.querySelector('.btn-open')
const dialogueEl = document.querySelector('.dialogue')
const btnElclose = document.querySelector('.btn-close')

btnEl.addEventListener("click", function(){
   dialogueEl.showModal()
});

btnElclose.addEventListener("click", function(){
    dialogueEl.close()
})