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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log("User :", user);
        getList(user);
    } 
});

const btnLogout = document.querySelector('#btnLogout');
btnLogout.addEventListener("click", function(){
    firebase.auth().signOut();
    console.log("Logout completed.");
    window.location.href="index.html";
})
