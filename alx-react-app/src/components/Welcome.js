function WelcomeMessage() {
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to ALX React APP!';
    div.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'This is a simple component.';
    div.appendChild(p);

    return div;
}

document.body.appendChild(WelcomeMessage());
