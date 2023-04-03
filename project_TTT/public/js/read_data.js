// var ref = firebase.database().ref("UserList");
const userListRef = firebase.database().ref("UserList");

let readList = () => {
    document.querySelector("#userDisplay").innerHTML = "";

    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    try {
        userListRef.child(currentUser.uid).once("value").then((snapshot) => {
            snapshot.forEach((data) => {
                var id = data.key;
                var displayList = data.val().displayName;

                const newDiv = `
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input">
                        <h1>${currentUser.displayName}</h1>
                        <label class="form-check-label">${displayList}</label>
                    </div>
                    `;
                const newEle = document.createRange().createContextualFragment(newDiv);
                document.querySelector("#userDisplay").appendChild(newEle);
            });
        })
    } catch (e) {
        
    }  
}

window.onload = readList;

let getList = (user) => {
    if (user) {
        userListRef.child(user.uid).on("value", (snapshot) => {
            readList();
        });
    }
};

// let readList = () => {
//     document.querySelector('#userDisplay').innerHTML = "";

//     const currentUser = firebase.auth().currentUser;
//     userListRef.child(currentUser.uid).once("value").then((snapshot) => {
//         snapshot.forEach((data) => {
//             var id = data.key;
//             var title = data.val().title;
//             // let title = snapshot.child(id).child("title").val();
//             const newDiv = `
//                 <div class="form-check">
//                     <input type="checkbox" class="form-check-input">
//                     <label class="form-check-label">${title}</label>
//                     <span>
//                         <button type="button" class="btn btn-outline-danger btn-delete" data-id="${id}">
//                             <i class="bi bi-trash3"></i>
//                         </button>
//                     </span>
//                 </div>
//             `;
//             const newElement = document.createRange().createContextualFragment(newDiv);
//             document.querySelector('#main-content').appendChild(newElement);
//         });
//         document.querySelectorAll("button.btn-delete").forEach((btn) => {
//             btn.addEventListener("click", deleteList);
//         });
//     })
// }

// let deleteList = (event) => {
//     const id = event.currentTarget.getAttribute('data-id');
//     const currentUser = firebase.auth().currentUser;
//     userListRef.child(currentUser.uid).child(id).remove();
//     console.log(`delete on id:${id}`);
// }


// const logoutItems = document.querySelectorAll(".logged-out");
// const loginItems = document.querySelectorAll(".logged-in");

// let setupUI = (user) => {
//     if (user) {
//         loginItems.forEach((item) => (item.style.display = "inline-block"));
//         logoutItems.forEach((item) => (item.style.display = "none"));
//     } else {
//         loginItems.forEach((item) => (item.style.display = "none"));
//         logoutItems.forEach((item) => (item.style.display = "inline-block"));
//     }
// }