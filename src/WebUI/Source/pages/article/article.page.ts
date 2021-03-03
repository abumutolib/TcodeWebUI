const button = document.createElement('button') as HTMLButtonElement;

button.addEventListener('click', () => {

});

function saveArticle(e: Event): void {
    e.preventDefault();
    const form = document.getElementById('form') as HTMLFormElement;
    form.submit();
}
