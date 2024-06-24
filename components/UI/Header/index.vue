<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">Joyería Bogotá</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/categorias">Categorías</NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <div class="input-group">
            <input type="search" class="form-control border-0" placeholder="Search" aria-label="Search"
              aria-describedby="search">
            <button class="btn btn-dark border-0" type="button" id="search">Search</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>
