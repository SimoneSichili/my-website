import Vue from 'vue';
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);
var dayjs = require('dayjs');

new Vue({
    el: '#app',
    data: {
        navbarShow: false,
        currentDate: "",
    },
    methods: {
        toTop: function () {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        },
        showNav: function () {

            if (this.navbarShow == false) {
                this.navbarShow = true;
            } else {
                this.navbarShow = false;
            }
        },
    },
    mounted: function () {
        this.currentDate = dayjs().format('YYYY');
    }
});