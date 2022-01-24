let myBooks = ['sleeping beauty','cinderella','snowwhite','rapunzel','shrek',];



const SearchInput = document.querySelector('#input-list');

SearchInput.onkeypress = function (event) {
    if (event.key === 'Enter') {
        if (SearchInput.value.trim() === "") {
            alert('please enter a valid search');
        } else if (SearchInput.value.trim() === 'sleeping beauty') {
            alert('this book is curretly not available');
        } else if (SearchInput.value.trim() === 'cinderella') {
            alert('2 results found');
        } else if (SearchInput.value.trim() === 'snowwhite' ) {
            alert('this book is currently not available');
        } else if (SearchInput.value.trim() === 'rapunzel') {
            alert('4 results found'); 
        } else {
            alert('search again');
        }
}

}
