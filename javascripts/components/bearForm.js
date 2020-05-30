import utilities from '../helpers/utilities.js';
import riverData from '../helpers/data/riverData.js';
import river from '../components/river.js';

const addToRiverEvent = (e) => {
    e.preventDefault();
    const newBearObject = {
        name: (e.srcElement.form[0].value),
        image: (e.srcElement.form[1].value),
    }
    river.addToRiver(newBearObject);
}

const makeForm = () => {
    const domString = `
    <form id="create-bear-form">
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
    document.querySelector('#submit-button').addEventListener('click', addToRiverEvent)
}

export default { makeForm };