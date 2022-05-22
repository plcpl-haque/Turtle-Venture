const loadUsers = () => {
    fetch('https://gorest.co.in/public/v1/users')
        .then(res => res.json())
        .then(data => displayUsers(data.data));
};

loadUsers();

const displayUsers = fetchAPI => {
    const usersDiv = document.getElementById('row');
    const users = fetchAPI;

    for (const user of users) {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('text-center');
        div.innerHTML = `
        <div class="card h-100">               
               <div class="card-body">
                 <h5 class="card-title">${user.name}</h5>
                 <p class="my-0"><span class="fw-bold">Email:</span> ${user.email}</p>
                 <p class="my-0"><span class="fw-bold">Gender:</span> ${user.gender}</p>                 
                 <p class="my-0"><span class="fw-bold">Status:</span> ${user.status}</p>                 
               </div>
        </div>
        `;
        usersDiv.appendChild(div);
    }
}