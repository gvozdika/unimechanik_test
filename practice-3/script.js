const tbody = document.querySelector("tbody");
const columns = document.querySelectorAll(".table__header");
const search = document.querySelector(".search");

let posts = [];
let filteredPosts = [];
let defaultSort = true;
let lastClickedCol = "";

const renderTable = (parentNode, posts) => {
  parentNode.innerHTML = "";
  posts.forEach((el) => {
    const row = `<tr class ="table__row">
      <td class ="table__cell table__cell-userId">${el.userId}</td>
      <td class ="table__cell table__cell-id">${el.id}</td>
      <td class ="table__cell table__cell-title">${el.title}</td>
      <td class ="table__cell table__cell-body">${el.body}</td>
    </tr>`;
    parentNode.insertAdjacentHTML("beforeend", row);
  });
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    posts = data;
    renderTable(tbody, data);
  });

columns.forEach((col) => {
  col.addEventListener("click", (e) => {
    const sortVal = e.target.innerHTML;
    const postsToSort = filteredPosts.length ? filteredPosts : posts;

    if (lastClickedCol == e.target.innerHTML) {
      defaultSort = !defaultSort;
    } else {
      defaultSort = true;
    }

    lastClickedCol = e.target.innerHTML;

    const sortedPosts = postsToSort.sort((a, b) => {
      return defaultSort 
          ? a[`${sortVal}`] > b[`${sortVal}`] ? 1 : a[`${sortVal}`] < b[`${sortVal}`] ? -1 : 0
          : a[`${sortVal}`] < b[`${sortVal}`] ? 1 : a[`${sortVal}`] > b[`${sortVal}`] ? -1 : 0;
    });

    renderTable(tbody, sortedPosts);
  });
});

search.addEventListener("input", (e) => {
  if (e.target.value.length > 2) {
    filteredPosts = posts.filter((el) => {
      return (
        String(el.userId).indexOf(e.target.value) > -1 ||
        String(el.id).indexOf(e.target.value) > -1 ||
        String(el.title).indexOf(e.target.value) > -1 ||
        String(el.body).indexOf(e.target.value) > -1
      );
    });

    renderTable(tbody, filteredPosts);
  } else {
    renderTable(tbody, posts);
  }
});
