let items = [];


async function save() {

    await setTimeout(() => {
        const button = document.querySelector('#button')
    button.disabled=false;

    boxvalue = document.getElementById("box").value;
  items.push(boxvalue);
  console.log(items);

  }, 3000);
  button.disabled=true
  
}


save()