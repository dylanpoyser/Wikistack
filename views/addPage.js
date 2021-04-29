const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div>
        <input
          id="Name"
          name=""
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>

      <div>
        <input
          id="Email"
          name=""
          type="text"
          class="form-control"
          placeholder="Email Address"
        />
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <input
          id="content"
          name="page content"
          type="text"
          class="form-control"
          placeholder="Page Content"
        />
      </div>

      <div>
        <input
          id="status"
          name="status"
          type="text"
          class="form-control"
          placeholder="Page Status"
        />
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
