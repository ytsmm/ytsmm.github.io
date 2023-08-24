Vue.component('error', {
    props: ['error'],
    template: 
      `<div v-show="error">Ошибка подключения к серверу</div>`
  })
  
  