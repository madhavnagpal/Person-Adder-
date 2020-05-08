let personName = $("#personName");
let personAge = $("#personAge");
let addBtn = $("#addBtn");
let PersonsTable = $("#PersonsTable");

function getAllPersons() {
  $.get("/persons", (persons) => {
    PersonsTable.empty();
    PersonsTable.append(`
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>`);

    for (let person of persons) {
      console.log(person);
      let item = $("<tr></tr>").html(`
    <th>${person.Person_Id}</th>
    <th>${person.Person_Name}</th>
    <th>${person.Person_Age}</th>`);
      PersonsTable.append(item);
    }
  });
}

getAllPersons();

addBtn.click(() => {
  $.post(
    "/persons",
    {
      name: personName.val(),
      age: personAge.val(),
    },
    (data) => {
      console.log(data);
      getAllPersons();
    }
  );
});
