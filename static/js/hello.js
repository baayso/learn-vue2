var app = new Vue({
    el: '#app',
    data: {
        message: message,
        seen: true,
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: new Date().toLocaleString()}
        ],
        firstName: 'Foo',
        lastName: 'Bar'
    },
    filters: {
        capitalize: function (value) {
            if (!value) {
                return '';
            }
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        filterA: function (value, arg1, arg2) {
            if (!value) {
                return '';
            }
            value = value.toString();
            return value + arg1 + arg2;
        }
    },
    methods: {
        change: function () {
            var msg = document.getElementById("txtMsg").value;
            this.seen = !!msg;

            this.todos[0].text = msg;

            this.fullName = 'Hello World';
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        },
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});
