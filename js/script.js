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
        'task 1','task 2','task 3'
      ]
    },
    methods: {
      addItem: function () {
        this.todos.push(this.newItem);
        this.newItem = ''
      },
      deleteItem: function (index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }

      }


    }
  });


})();
