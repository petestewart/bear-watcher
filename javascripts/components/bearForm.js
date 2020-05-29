import utilities from '../helpers/utilities.js';

let bears = []

const addBear = () => {
    document.getElementById('create-bear-form').onsubmit = function() {
        const newBearObject = {
            name: (document.getElementById('formInputName').value),
            image: (document.getElementById('formInputURL').value)
        }
        // console.log(newBearObject);
        bears.push(newBearObject);
        // console.log(bears);
      return false;
    };
}

const makeForm = () => {
    const domString = `
    <form onsubmit="return false" id="create-bear-form">
    <div class="form-group">
      <label for="formInputName">Bear name</label>
      <input type="text" class="form-control" id="formInputName" placeholder="Winnie The Pooh">
    </div>
    <div class="form-group">
    <label for="formInputURL">Image URL</label>
    <input type="text" class="form-control" id="formInputURL" placeholder="http://">
    <small id="formURLHelp" class="form-text text-muted">Images must be GIF, JPG, or PNG.</small>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-button">Submit</button>
  </form>
    `
    utilities.printToDom('#form', domString);
    document.querySelector('#submit-button').addEventListener('click', addBear)
}

export default { makeForm };