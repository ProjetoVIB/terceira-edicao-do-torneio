const menuItem = document.querySelectorAll('.item-menu')

//Função de Item Ativo

function selectItem(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectItem)
)

//Expandir Menu

const btnExp = document.querySelector('#btn-exp')
const menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

