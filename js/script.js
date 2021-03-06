// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
(function () {
  'use strict';
  // データバインディングデータバインディングというのは data と UI を結び付けるという意味で、双方向というのは data を更新すれば UI が更新されて、 UI を更新すれば data が更新されるという意味になります。
  // vm = view model
  var vm = new Vue({

    el:'#app',
    //name とキーで保持
    data: {
      newItem:'',
      todos: [
      ]
    },
    watch: {
      todos: {
        handler: function () {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep:true
      }
    },
    mounted: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false
        };

        this.todos.push(item);
        this.newItem = ''
      },
      deleteItem: function (index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function (index) {
        if (!confirm('delet finishd?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function () {
        return this.todos.filter(function (todo) {
          return !todo.isDone;
        }
        )
      }
    }
  });


})();
