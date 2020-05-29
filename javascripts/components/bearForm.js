import utilities from '../helpers/utilities.js';

const makeForm = () => {

    const domString = `
    <form>
    <div class="form-group">
      <label for="formInputName">Bear name</label>
      <input type="text" class="form-control" id="formInputName" placeholder="Winnie The Pooh">
    </div>
    <div class="form-group">
    <label for="formInputURL">Image URL</label>
    <input type="text" class="form-control" id="formInputURL" placeholder="http://">
    <small id="formURLHelp" class="form-text text-muted">Images must be GIF, JPG, or PNG.</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `
    utilities.printToDom('#form', domString);


}

export default { makeForm };