import Vue from 'vue';
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);

new Vue({
    el: '#app',
    data: {
        navbarShow: false,
    },
    methods: {
        reloadPage: function() {
            location.reload();
            document.documentElement.scrollTop = 0;
        },
        showNav: function() {
            
            if(this.navbarShow == false) {
                this.navbarShow = true;
            } else {
                this.navbarShow = false;
            }
        },
    },
    mounted: function() {
    }
});

// 