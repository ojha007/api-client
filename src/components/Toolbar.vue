<template>
  <div>
    <div class="d-flex" id="wrapper">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-dark"
        style="height: 45px;width: 100%"
      >
        <div class="change-lang mr-2 float-right">
          <div class="dropdown show">
            <a
              class="dropdown-toggle btn btn-dark float-right"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <flag iso="usa" title="English"></flag>
              English
            </a>

            <div
              class="dropdown-menu "
              aria-labelledby="dropdownMenu"
              v-for="lan in languages"
              :key="lan.title"
            >
              <flag :iso="lan.iso"> {{ lan.title }}</flag>
              {{ lan.title }}
            </div>
          </div>
        </div>
        <flag iso="usa"></flag>
      </nav>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 p-0">
          <div class="bg-dark" id="sidebar-wrapper">
            <div class="list-group list-group-flush text-center">
              <router-link
                to="dashboard"
                class="list-group-item list-group-item-action bg-dark text-white text-capitalize"
              >
                Home
              </router-link>
              <a
                href="#"
                class="list-group-item list-group-item-action bg-dark text-white"
                >Shortcuts</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action bg-dark text-white"
                >Overview</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action bg-dark text-white"
                >Events</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action bg-dark text-white"
                >Profile</a
              >
              <a
                href="#"
                class="list-group-item list-group-item-action bg-dark text-white"
                >Status</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-10 mt-5">
          <div id="page-content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#sidebar-wrapper {
  min-height: 100vh;
  width: 100%;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  position: absolute;
}
.list-group-item > a:hover {
  background-color: paleturquoise;
}
</style>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      languages: [
        { iso: "en", title: "English" },
        { iso: "es", title: "Spanish" }
      ]
    };
  }
};
</script>
