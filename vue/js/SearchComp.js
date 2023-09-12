Vue.component('search', {
    data () {
        return {
          userSearch: ''
        }
    },
    template: `<form class="searchForm" action="#" @submit.prevent='$parent.filter(userSearch)'>
    <input class="searchInput" type="text" placeholder="Search" v-model="userSearch">
    <button class="searchBtn" type="submit">
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
    </button>
</form>`
});