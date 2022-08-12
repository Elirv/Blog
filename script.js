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
  const comentario11 = document.getElementById("comment-1-1");
  comentario11.textContent = arrayObjetos[1].body;
  const comentario12 = document.getElementById("comment-1-2");
  comentario12.textContent = arrayObjetos[2].body;
  const comentario13 = document.getElementById("comment-1-3");
  comentario13.textContent = arrayObjetos[3].body;
  const comentario14 = document.getElementById("comment-1-4");
  comentario14.textContent = arrayObjetos[4].body;

  const comentario2 = document.getElementById("comment-2");
  comentario2.textContent = arrayObjetos[5].body;
  const comentario21 = document.getElementById("comment-2-1");
  comentario21.textContent = arrayObjetos[6].body;
  const comentario22 = document.getElementById("comment-2-2");
  comentario22.textContent = arrayObjetos[7].body;
  const comentario23 = document.getElementById("comment-2-3");
  comentario23.textContent = arrayObjetos[8].body;
  const comentario24 = document.getElementById("comment-2-4");
  comentario24.textContent = arrayObjetos[9].body;

  const comentario3 = document.getElementById("comment-3");
  comentario3.textContent = arrayObjetos[10].body;
  const comentario31 = document.getElementById("comment-3-1");
  comentario31.textContent = arrayObjetos[11].body;
  const comentario32 = document.getElementById("comment-3-2");
  comentario32.textContent = arrayObjetos[12].body;
  const comentario33 = document.getElementById("comment-3-3");
  comentario33.textContent = arrayObjetos[13].body;
  const comentario34 = document.getElementById("comment-3-4");
  comentario34.textContent = arrayObjetos[14].body;

  const comentario4 = document.getElementById("comment-4");
  comentario4.textContent = arrayObjetos[15].body;
  const comentario41 = document.getElementById("comment-4-1");
  comentario41.textContent = arrayObjetos[16].body;
  const comentario42 = document.getElementById("comment-4-2");
  comentario42.textContent = arrayObjetos[17].body;
  const comentario43 = document.getElementById("comment-4-3");
  comentario43.textContent = arrayObjetos[18].body;
  const comentario44 = document.getElementById("comment-4-4");
  comentario44.textContent = arrayObjetos[19].body;

  // const comentario4 = document.getElementById("comment-5");
  // comentario4.textContent = arrayObjetos[20].body;
});
});

fetch("http://localhost:3000/comments")
.then(response => response.json())
.then((arrayObjetos) => {
arrayObjetos.map((copy) => {
  // console.log(`${copy.name} ${copy.email} ${copy.body}`);

  const coTitle = document.getElementById("ti-1");
  coTitle.textContent = arrayObjetos[0].name;
  const coTitle11 = document.getElementById("ti-1-1");
  coTitle11.textContent = arrayObjetos[1].name;
  const coTitle12 = document.getElementById("ti-1-2");
  coTitle12.textContent = arrayObjetos[2].name;
  const coTitle13 = document.getElementById("ti-1-3");
  coTitle13.textContent = arrayObjetos[3].name;
  const coTitle14 = document.getElementById("ti-1-4");
  coTitle14.textContent = arrayObjetos[4].name;

  const coTitle2 = document.getElementById("ti-2");
  coTitle2.textContent = arrayObjetos[5].name;
  const coTitle21 = document.getElementById("ti-2-1");
  coTitle21.textContent = arrayComments[6].name;
  const coTitle22 = document.getElementById("ti-2-2");
  coTitle22.textContent = arrayComments[7].name;
  const coTitle23 = document.getElementById("ti-2-3");
  coTitle23.textContent = arrayComments[8].name;
  const coTitle24 = document.getElementById("ti-2-4");
  coTitle24.textContent = arrayComments[9].name;

  const coTitle3 = document.getElementById("ti-3");
  coTitle3.textContent = arrayObjetos[10].name;
  const coTitle31 = document.getElementById("ti-3-1");
  coTitle31.textContent = arrayComments[11].name;
  const coTitle32 = document.getElementById("ti-3-2");
  coTitle32.textContent = arrayComments[12].name;
  const coTitle33 = document.getElementById("ti-3-3");
  coTitle33.textContent = arrayComments[13].name;
  const coTitle34 = document.getElementById("ti-3-4");
  coTitle34.textContent = arrayComments[14].name;

  const coTitle4 = document.getElementById("ti-4");
  coTitle4.textContent = arrayObjetos[15].name;
  const coTitle41 = document.getElementById("ti-4-1");
  coTitle41.textContent = arrayComments[16].name;
  const coTitle42 = document.getElementById("ti-4-2");
  coTitle42.textContent = arrayComments[17].name;
  const coTitle43 = document.getElementById("ti-4-3");
  coTitle43.textContent = arrayComments[18].name;
  const coTitle44 = document.getElementById("ti-4-4");
  coTitle44.textContent = arrayComments[19].name;

  // const coTitle4 = document.getElementById("ti-5");
  // coTitle4.textContent = arrayObjetos[20].name;
});
});

fetch("http://localhost:3000/comments")
.then(response => response.json())
.then((arrayComments) => {
  arrayComments.map((copy) => {
  // console.log(`${copy.name} ${copy.email} ${copy.body}`);

  const conEmail = document.getElementById("com-email-1");
  conEmail.textContent = arrayComments[0].email;
  const conEmail11 = document.getElementById("com-email-1-1");
  conEmail11.textContent = arrayComments[1].email;
  const conEmail12 = document.getElementById("com-email-1-2");
  conEmail12.textContent = arrayComments[2].email;
  const conEmail13 = document.getElementById("com-email-1-3");
  conEmail13.textContent = arrayComments[3].email;
  const conEmail14 = document.getElementById("com-email-1-4");
  conEmail14.textContent = arrayComments[4].email;

  const conEmail2 = document.getElementById("com-email-2");
  conEmail2.textContent = arrayComments[5].email;
  const conEmail21 = document.getElementById("com-email-2-1");
  conEmail21.textContent = arrayComments[6].email;
  const conEmail22 = document.getElementById("com-email-2-2");
  conEmail22.textContent = arrayComments[7].email;
  const conEmail23 = document.getElementById("com-email-2-3");
  conEmail23.textContent = arrayComments[8].email;
  const conEmail24 = document.getElementById("com-email-2-4");
  conEmail24.textContent = arrayComments[9].email;

  const conEmail3 = document.getElementById("com-email-3");
  conEmail3.textContent = arrayComments[10].email;
  const conEmail31 = document.getElementById("com-email-3-1");
  conEmail31.textContent = arrayComments[11].email;
  const conEmail32 = document.getElementById("com-email-3-2");
  conEmail32.textContent = arrayComments[12].email;
  const conEmail33 = document.getElementById("com-email-3-3");
  conEmail33.textContent = arrayComments[13].email;
  const conEmail34 = document.getElementById("com-email-3-4");
  conEmail34.textContent = arrayComments[14].email;

  const conEmail4 = document.getElementById("com-email-4");
  conEmail4.textContent = arrayComments[15].email;
  const conEmail41 = document.getElementById("com-email-4-1");
  conEmail41.textContent = arrayComments[16].email;
  const conEmail42 = document.getElementById("com-email-4-2");
  conEmail42.textContent = arrayComments[17].email;
  const conEmail43 = document.getElementById("com-email-4-3");
  conEmail43.textContent = arrayComments[18].email;
  const conEmail44 = document.getElementById("com-email-4-4");
  conEmail44.textContent = arrayComments[19].email;

  // const conEmail4 = document.getElementById("com-email-5");
  // conEmail4.textContent = arrayComments[20].email;
});
});


// --------comentario ultimo---------------

fetch("http://localhost:3000/posts/1/comments")
.then(response => response.json())
.then((arrayComments) => {
  arrayComments.map((copy) => {
    const ejemplo = document.getElementById("aki");
    ejemplo.textContent = arrayComments[i];

  });
});