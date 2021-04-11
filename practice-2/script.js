const tbody = document.querySelector("tbody");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      const row = `<tr class="table__row">
        <td class="table__cell">${el.userId}</td>
        <td class="table__cell">${el.id}</td>
        <td class="table__cell">${el.title}</td>
        <td class="table__cell">${el.body}</td>
      </tr>`;
      tbody.insertAdjacentHTML("beforeend", row);
    });
  });
