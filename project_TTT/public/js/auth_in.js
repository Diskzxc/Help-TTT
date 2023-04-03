// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log("User :", user);
//         getList(user);
//         const userDetail = `
//         <img src="${user.photoURL}" class="img-fluid rounded-circle border border-light " style='width: 3em'>
//         <span style="color: white;">${user.displayName}</span>
//         `;
//         const newElement = document.createRange().createContextualFragment(userDetail);
//         document.querySelector('.profile').appendChild(newElement);
//     } 
//     setupUI(user);
// });

const loginForm = document.querySelector("#btnSignin");
loginForm.addEventListener("click", loginUser);

const userListRef = firebase.database().ref("UserList");

function loginUser(e) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((userInfo) => {
        const user_id = userInfo.user.uid;
        userListRef.child(user_id).set({
            displayName: "Test",
            score: 0,
            win: 0,
            lose: 0,
        })
        console.log(userListRef);
        // console.log(userListRef.displayName);
        // if () {
        //     window.location.href="createUser.html";
        // } else {
        //     window.location.href="mainMenu.html";
        // }
    })
    .catch((error) => {
        console.error(error);
    })
}