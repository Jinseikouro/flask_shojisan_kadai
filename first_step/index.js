let users = document.getElementById('users');

const fetchData = () => {
    return fetch('http://localhost:5000/users')
        .then(res => res.json());
};

const editData = async () => {
    const data = await fetchData();

    const newOuterDiv = document.createElement('div');
    for (const user of data) {
        const newInnerDiv = document.createElement('div');

        for (const key of Object.keys(user).reverse()) {
            const newP = document.createElement('p');
            newP.textContent = `${key}: ${user[key]}`;
            newInnerDiv.appendChild(newP);
        }

        const separator = document.createElement('p');
        separator.textContent = '--------------------------';
        newInnerDiv.appendChild(separator);

        newOuterDiv.appendChild(newInnerDiv);
    }

    users.appendChild(newOuterDiv);
};

editData();
