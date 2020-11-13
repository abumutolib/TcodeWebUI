

const labels = document.querySelectorAll('.star-lbl') as NodeListOf<HTMLLabelElement>;
const inputs = document.querySelectorAll('.star-cont') as NodeListOf<HTMLInputElement>;
const spanValidates = document.querySelectorAll('[data-valmsg-for]') as NodeListOf<HTMLSpanElement>;

let regex_presets = {
    letters: /^[a-zA-Z]*$/, // letters only
    name: /^[a-zA-Z \-']*$/, // letters, spaces, - and '
    username: /^[a-zA-Z0-9_\.!?-]*$/, // letters, numbers, _ . ! ? and -
    numbers: /^[0-9]*$/, // numbers only
    phone: /^[0-9 \-+]*$/, // numbers, spaces, - and +
    date: /^\d{4}-\d{2}-\d{2}$/, // standard unix date format: YYYY-mm-dd
    email: /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    // email regex was taken from this resource: http://www.regular-expressions.info/email.html
    // it is a simplified implementation of the RFC 5322 syntax standard
};

document.addEventListener('DOMContentLoaded', () => {
    if (inputs.length > 0)
        inputs.forEach(input => {
            if (input.value)
                findLabelForInput(true, input.id);
        });
});

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        findLabelForInput(true, input.id)
    });

    input.addEventListener('blur', () => {
        if (input.value === null || input.value === "")
            findLabelForInput(false, input.id);
    });

    input.addEventListener('keydown', () => {
        doValidate(input);
    });
});

function findLabelForInput(isActive: boolean, inputId: string) {
    labels.forEach(lable => {
        if (lable.htmlFor === inputId) {
            if (isActive)
                lable.classList!.add('active');
            else
                lable.classList!.remove('active');
        }
    });
}

function doValidate(element: HTMLInputElement) {
    if (element.type === 'email') {
        if (!regex_presets.email.test(element.value)) {
            element!.parentElement!.classList.add('invalid');
            element!.previousElementSibling!.classList.add('invalid');
        } else {
            element!.parentElement!.classList.remove('invalid');
            element!.previousElementSibling!.classList.remove('invalid');
        }
    } else if (element.type === 'password') {
        if (element.value.length < 5) {
            element!.parentElement!.classList.add('invalid');
            element!.previousElementSibling!.classList.add('invalid');
        } else {
            element!.parentElement!.classList.remove('invalid');
            element!.previousElementSibling!.classList.remove('invalid');
        }
    }
}

export default function () {
    return true;
}