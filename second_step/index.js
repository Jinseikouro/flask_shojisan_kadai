let table = document.getElementById('main_table');
let trTh = document.getElementById('trTh');

const fetchData = async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json();
};

const editData = async () => {
    const data = await fetchData();

    for(const key of Object.keys(data[0]).reverse()) {
        const newTh = document.createElement('th');
        newTh.textContent = key;
        trTh.appendChild(newTh);
    }

    for(const user of data) {
        const newTr = document.createElement('tr');
        for(const key of Object.keys(user).reverse()) {
            const newTd = document.createElement('td');
            newTd.textContent = user[key];
            newTr.appendChild(newTd);
        }
        table.appendChild(newTr);
    }
};
editData();
