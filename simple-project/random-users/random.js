const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;

    const nameTag = document.getElementById('name');

    const title = user.results[0].name.title;
    const fname = user.results[0].name.first;
    const lname = user.results[0].name.last;
    // const name=title.concat(' ', fname, ' ',lname)
    nameTag.innerText = title.concat(" ", fname, " ", lname);
    //   user.results[0].name.title +
    //   " " +
    //   user.results[0].name.first +
    //   " " +
    //   user.results[0].name.last;

    const locationTag = document.getElementById("location");
    locationTag.innerText = user.results[0].location.country;

    // const pictureTag = document.getElementById("picture");
    // pictureTag.innerHTML = user.results[0].picture.medium;
    // console.log(user.results[0].picture.medium);
};

loadUser();
