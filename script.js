window.addEventListener("load", () => {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      const listGroup = document.querySelector(".list-group");
      listGroup.classList.remove("d-none");

      for (i = 0; i < 5; i++) {
        const titles = document.getElementsByClassName("list-title");
        titles[i].textContent = arrayObjetos[i].title;

        const modalTitle = document.getElementById("title-modal1");
        modalTitle.textContent = arrayObjetos[0].title;

        const modalTitle2 = document.getElementById("title-modal2");
        modalTitle2.textContent = arrayObjetos[1].title;

        const modalTitle3 = document.getElementById("title-modal3");
        modalTitle3.textContent = arrayObjetos[2].title;

        const modalTitle4 = document.getElementById("title-modal4");
        modalTitle4.textContent = arrayObjetos[3].title;

        const modalTitle5 = document.getElementById("title-modal5");
        modalTitle5.textContent = arrayObjetos[4].title;

        const modalBody = document.getElementById("body-modal1");
        modalBody.textContent = arrayObjetos[0].body;

        const modalBody2 = document.getElementById("body-modal2");
        modalBody2.textContent = arrayObjetos[1].body;

        const modalBody3 = document.getElementById("body-modal3");
        modalBody3.textContent = arrayObjetos[2].body;

        const modalBody4 = document.getElementById("body-modal4");
        modalBody4.textContent = arrayObjetos[3].body;

        const modalBody5 = document.getElementById("body-modal5");
        modalBody5.textContent = arrayObjetos[4].body;
      }
    });
  });
// -------------------------------------------- email username ---------------------------------------
fetch("http://localhost:3000/users")
.then((array) => array.json())
.then((arrayObjetos) => {
  const listGroup = document.querySelector(".list-group");
  listGroup.classList.remove("d-none");

  const comentario = document.getElementById("name-modal1");
  comentario.textContent = arrayObjetos[0].username;

  const comentario1 = document.getElementById("name-modal2");
  comentario1.textContent = arrayObjetos[1].username;

  const comentario2 = document.getElementById("name-modal3");
  comentario2.textContent = arrayObjetos[2].username;

  const comentario3 = document.getElementById("name-modal4");
  comentario3.textContent = arrayObjetos[3].username;

  const comentario4 = document.getElementById("name-modal5");
  comentario4.textContent = arrayObjetos[4].username;

});

fetch("http://localhost:3000/users")
.then((array) => array.json())
.then((arrayObjetos) => {
  const listGroup = document.querySelector(".list-group");
  listGroup.classList.remove("d-none");

  const comentario = document.getElementById("email-modal1");
  comentario.textContent = arrayObjetos[0].email;

  const comentario1 = document.getElementById("email-modal2");
  comentario1.textContent = arrayObjetos[1].email;

  const comentario2 = document.getElementById("email-modal3");
  comentario2.textContent = arrayObjetos[2].email;

  const comentario3 = document.getElementById("email-modal4");
  comentario3.textContent = arrayObjetos[3].email;

  const comentario4 = document.getElementById("email-modal5");
  comentario4.textContent = arrayObjetos[4].email;


});

  // -------------------------------------------- los comentarios ---------------------------------------

fetch("http://localhost:3000/comments")
.then(response => response.json())
.then((arrayObjetos) => {
arrayObjetos.map((copy) => {
  // console.log(`${copy.name} ${copy.email} ${copy.body}`);

  const comentario = document.getElementById("comment-1");
  comentario.textContent = arrayObjetos[0].body;

  const comentario1 = document.getElementById("comment-2");
  comentario1.textContent = arrayObjetos[1].body;

  const comentario2 = document.getElementById("comment-3");
  comentario2.textContent = arrayObjetos[2].body;

  const comentario3 = document.getElementById("comment-4");
  comentario3.textContent = arrayObjetos[3].body;

  const comentario4 = document.getElementById("comment-5");
  comentario4.textContent = arrayObjetos[4].body;
});
});

fetch("http://localhost:3000/comments")
.then(response => response.json())
.then((arrayObjetos) => {
arrayObjetos.map((copy) => {
  // console.log(`${copy.name} ${copy.email} ${copy.body}`);

  const coTitle = document.getElementById("ti-1");
  coTitle.textContent = arrayObjetos[0].name;

  const coTitle1 = document.getElementById("ti-2");
  coTitle1.textContent = arrayObjetos[1].name;

  const coTitle2 = document.getElementById("ti-3");
  coTitle2.textContent = arrayObjetos[2].name;

  const coTitle3 = document.getElementById("ti-4");
  coTitle3.textContent = arrayObjetos[3].name;

  const coTitle4 = document.getElementById("ti-5");
  coTitle4.textContent = arrayObjetos[4].name;
});
});

fetch("http://localhost:3000/comments")
.then(response => response.json())
.then((arrayComments) => {
  arrayComments.map((copy) => {
  // console.log(`${copy.name} ${copy.email} ${copy.body}`);

  const conEmail = document.getElementById("com-email-1");
  conEmail.textContent = arrayComments[0].email;

  const conEmail1 = document.getElementById("com-email-2");
  conEmail1.textContent = arrayComments[1].email;

  const conEmail2 = document.getElementById("com-email-3");
  conEmail2.textContent = arrayComments[2].email;

  const conEmail3 = document.getElementById("com-email-4");
  conEmail3.textContent = arrayComments[3].email;

  const conEmail4 = document.getElementById("com-email-5");
  conEmail4.textContent = arrayComments[4].email;
});
});


