var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!' + new Date(),
        seen: true,
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    },
    methods: {
        change: function () {
            var msg = document.getElementById("txtMsg").value;
            this.seen = !!msg;

            this.todos[0].text = msg;
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
