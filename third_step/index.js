let table = document.getElementById('main_table');

const fetchData = async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json();
};

const tableValue = (data) => {
    for(const user of data) {
        const newTr = document.createElement('tr');
        newTr.setAttribute("id", "active")

        //idを埋め込み
        const newTd1 = document.createElement('th');
        newTd1.textContent = user['id'];
        newTd1.setAttribute('scope',"row");
        newTr.appendChild(newTd1);

        //nameを埋め込み
        const newTd2 = document.createElement('td');
        newTd2.textContent = user['name'];
        newTr.appendChild(newTd2);
        
        //性別を埋め込み
        newTd3 = document.createElement('td');
        newTd3.textContent = user['gender'];
        newTr.appendChild(newTd3);

        //性別を埋め込み
        newTd4 = document.createElement('td');
        newTd4.textContent = user['email'];
        newTr.appendChild(newTd4);

        table.appendChild(newTr);
    }
};
let data;
const editData = async () => {
    data = await fetchData();
    tableValue(data);
};
editData();

const nameBool = (user, userName) => {
    return user["name"].includes(userName);
}

const genderBool = (user, userGender) => {
    return user["gender_cd"] === userGender ? true: false;
}

function findElement() {
    let userName = document.getElementById('catchName').value || 'default';
    let userGender = document.getElementById('catchGender').value === "" ?  'default': document.getElementById('catchGender').value;

    while (table.rows[1]) {
        table.deleteRow(1);
    }

    if(userName === 'default' && userGender === 'default') {
        tableValue(data);
    } else {
        let list =[];
        for(const user of data) {
            if(userName !== 'default' && userGender !== 'default') {
                if(nameBool(user, userName) && genderBool(user, userGender)) {
                    list.push(user);
                }
            } else if (userGender === 'default' && nameBool(user, userName)) {
                list.push(user);
            } else if (userName === 'default' && genderBool(user, userGender)) {
                list.push(user);
            }
        }
        tableValue(list);
    }
}