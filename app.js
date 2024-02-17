const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const box = document.querySelector('#box');
const array = [];

btn.addEventListener('click', function() {
    array.push(input.value);
    const item = array[array.length - 1]; // eng so'nggi elementni olish
    const card =`
        <div class="border w-75 m-auto rounded d-flex justify-content-between align-items-center px-2 my-2 mt-3">
            <h4 class="p-1">${item}</h4>
            <div>
            <button class="btn btn-success"><i class="bi bi-check-circle"></i></button> 
            <button class="btn btn-warning"><i class="bi bi-ban"></i></button>
            <button class="btn btn-danger"><i class="bi bi-trash3"></i></button>
        </div>
        </div>
    `;
    box.innerHTML += card;
});