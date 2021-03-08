let items = [];

function save() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const button = document.querySelector("#button");
        button.disabled = false;

        boxvalue = document.getElementById("box").value;
        items.push(boxvalue);
        console.log(items);
      }, 3000);
      button.disabled = true;
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

save().then().catch();
