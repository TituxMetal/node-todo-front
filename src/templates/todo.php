<?php require 'partials/head.php'; ?>

<section class="content container">
  <section class="box todos">
    <h1>Todo List</h1>
    <div class="todo-add">
      <input id="userName" type="text" class="todo-add__field" placeholder="Todo Title">
      <button type="submit" name="add" class="todo-add__button">Add</button>
    </div>
    <ul class="todo-items">
      <li class="todo-items__item">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span>Todo One</span>
          </label>
          <a href="#!" class="secondary-content">
            <i class="material-icons">delete</i>
          </a>
          <a href="#!" class="secondary-content">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </li>
      <li class="todo-items__item">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span>Todo Two</span>
          </label>
          <a href="#!" class="secondary-content">
            <i class="material-icons">delete</i>
          </a>
          <a href="#!" class="secondary-content">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </li>
      <li class="todo-items__item">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span>Todo Three</span>
          </label>
          <a href="#!" class="secondary-content">
            <i class="material-icons">delete</i>
          </a>
          <a href="#!" class="secondary-content">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </li>
      <li class="todo-items__item">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span>Todo Four</span>
          </label>
          <a href="#!" class="secondary-content">
            <i class="material-icons">delete</i>
          </a>
          <a href="#!" class="secondary-content">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </li>
    </ul>
  </section>
</section>

<?php require 'partials/footer.php'; ?>
