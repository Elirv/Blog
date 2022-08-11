
window.addEventListener("load", () => {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      const listGroup = document.querySelector(".list-group");
      listGroup.classList.remove("d-none");

      for (i = 0; i < 5; i++) {
        const titles = document.getElementsByClassName("list-title");
        titles[i].textContent = "Title: " + arrayObjetos[i].title;

        const modalTitle = document.getElementById("title-modal1");
        modalTitle.textContent = "Title: " + arrayObjetos[0].title;

        const modalTitle2 = document.getElementById("title-modal2");
        modalTitle2.textContent = "Title: " + arrayObjetos[1].title;

        const modalTitle3 = document.getElementById("title-modal3");
        modalTitle3.textContent = "Title: " + arrayObjetos[2].title;

        const modalTitle4 = document.getElementById("title-modal4");
        modalTitle4.textContent = "Title: " + arrayObjetos[3].title;

        const modalTitle5 = document.getElementById("title-modal5");
        modalTitle5.textContent = "Title: " + arrayObjetos[4].title;

        const modalBody = document.getElementById("body-modal1");
        modalBody.textContent = "Body: " + arrayObjetos[0].body;

        const modalBody2 = document.getElementById("body-modal2");
        modalBody2.textContent = "Body: " + arrayObjetos[1].body;

        const modalBody3 = document.getElementById("body-modal3");
        modalBody3.textContent = "Body: " + arrayObjetos[2].body;

        const modalBody4 = document.getElementById("body-modal4");
        modalBody4.textContent = "Body: " + arrayObjetos[3].body;

        const modalBody5 = document.getElementById("body-modal5");
        modalBody5.textContent = "Body: " + arrayObjetos[4].body;
      }
    });
});

fetch("http://localhost:3000/users")
    .then((array) => array.json())
    .then((arrayObjetos) => {

      arrayObjetos.map((copy) => {
        console.log(`Nombre ${copy.name} y Email ${copy.email}`);

        const modalName = document.getElementById("name-modal1");
        modalName.textContent = "name: " + arrayObjetos[0].name;

        const modalName2 = document.getElementById("name-modal2");
        modalName2.textContent = "name: " + arrayObjetos[1].name;

        const modalName3 = document.getElementById("name-modal3");
        modalName3.textContent = "name: " + arrayObjetos[2].name;

        const modalName4 = document.getElementById("name-modal4");
        modalName4.textContent = "name: " + arrayObjetos[3].name;

        const modalName5 = document.getElementById("name-modal5");
        modalName5.textContent = "name: " + arrayObjetos[4].name;

        const modalEmail = document.getElementById("email-modal1");
        modalEmail.textContent = "email: " + arrayObjetos[0].email;

        const modalEmail2 = document.getElementById("email-modal2");
        modalEmail2.textContent = "email: " + arrayObjetos[1].email;

        const modalEmail3 = document.getElementById("email-modal3");
        modalEmail3.textContent = "email: " + arrayObjetos[2].email;

        const modalEmail4 = document.getElementById("email-modal4");
        modalEmail4.textContent = "email: " + arrayObjetos[3].email;

        const modalEmail5 = document.getElementById("email-modal5");
        modalEmail5.textContent = "email: " + arrayObjetos[4].email;
      });
    });

// --------------------aparezcan los comentarios en una nueva ventama--------------------------
    document.addEventListener("DOMContentLoaded", () => {
      let combtn = document.getElementById("btn-comments");
    
      combtn.addEventListener("click", (e) => {
        let papaProduct = document.getElementById("exampleModal5");
        let papaProfile = document.getElementById("accordionFlushExample");
    
        papaProduct.classList.add("d-none");
    
        papaProfile.classList.remove("d-none");
    
        e.preventDefault();
      });
    });


// -------------------------------------------- los comentarios ---------------------------------------

    fetch("http://localhost:3000/comments")
    .then((array) => array.json())
    .then((arrayComments) => {
      arrayComments.map((copy) => {

        const modalComment = document.getElementById("comment1");
        modalComment.textContent = arrayComments[0].body;

        const modalComment1 = document.getElementById("comment2");
        modalComment1.textContent = arrayComments[1].body;

        const modalComment2 = document.getElementById("comment3");
        modalComment2.textContent = arrayComments[2].body;

        const modalComment3 = document.getElementById("comment4");
        modalComment3.textContent = arrayComments[3].body;

        const modalComment4 = document.getElementById("comment5");
        modalComment4.textContent = arrayComments[4].body;
      });
    });

