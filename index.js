lucide.createIcons();
const books = document.querySelectorAll('.book');
const categories = document.querySelectorAll('.category_card') ;

for (let i = 0; i < books.length; i++) {
    books[i].addEventListener('click', function () {
        location.href = `/pages/prophet_mhmd`;
        console.log('test');
    })
}

for(let i =0 ; i < categories.length ; i++){
        categories[i].addEventListener('click' , function(){
            location.href =`/pages/tafseer`
        })
}