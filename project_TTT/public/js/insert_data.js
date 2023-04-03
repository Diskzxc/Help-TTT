const userListRef = firebase.database().ref("UserList");

let createDisplayname = () => {
    var d_name = document.querySelector('#toDoInput').value;

    const currentUser = firebase.auth().currentUser;
    userListRef.child(currentUser.uid).push({
        displayName: d_name,
    })

    console.log("create displayName completed!!!");
    document.querySelector('#toDoInput').value = "";
    window.location.href="mainMenu.html";
}

// let createDisplayname = () => {
//     var d_name = document.querySelector('#toDoInput').value;

//     // const currentUser = firebase.auth().currentUser;
//     const firebaseRef = firebase.database().ref("UserList");
//     // userListRef.child(currentUser.uid).push({
//     firebaseRef.push({
//         displayName: d_name,
//     })
//     window.location.href="mainMenu.html";
//     // })

//     console.log("Add List completed!!!");
//     document.querySelector('#toDoInput').value = "";
// }
