const API_URL =
    "http://localhost:5000/api/users";

const form =
    document.getElementById("userForm");

const userList =
    document.getElementById("userList");

form.addEventListener("submit", addUser);

async function addUser(e){

    e.preventDefault();

    const user = {
        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value
    };

    try{

        const response =
            await fetch(API_URL,{
                method:"POST",
                headers:{
                    "Content-Type":
                        "application/json"
                },
                body:JSON.stringify(user)
            });

        const data =
            await response.json();

        alert(data.message);

        form.reset();

        fetchUsers();

    }catch(error){

        console.log(error);
    }
}

async function fetchUsers(){

    try{

        const response =
            await fetch(API_URL);

        const data =
            await response.json();

        userList.innerHTML = "";

        data.users.forEach((user)=>{

            const li =
                document.createElement("li");

            li.innerHTML = `
                ${user.name}
                (${user.email})

                <button
                    onclick="deleteUser(${user.id})">
                    Delete
                </button>
            `;

            userList.appendChild(li);
        });

    }catch(error){

        console.log(error);
    }
}

async function deleteUser(id){

    try{

        await fetch(
            `${API_URL}/${id}`,
            {
                method:"DELETE"
            }
        );

        fetchUsers();

    }catch(error){

        console.log(error);
    }
}

fetchUsers();