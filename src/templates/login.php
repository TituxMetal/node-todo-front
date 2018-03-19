<?php require 'partials/head.php'; ?>

<section class="content container">
  <section class="box">
    <h1>Login</h1>
    <form class="form" method="post">
      <div class="form__field">
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
      <div class="form__field">
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
      <button type="button" name="button" class="form__button">Login</button>
    </form>
  </section>
</section>

<?php require 'partials/footer.php'; ?>
