//----------------------------------------------------------------------------------------------------------------------
// Main VueBoot code
//----------------------------------------------------------------------------------------------------------------------

var app = new Vue({
    debug: true,
    el: '#example-app',
    methods: {
        showModal: function(name)
        {
            this.$refs[name].showModal();
        },
        hideModal: function(name)
        {
            this.$refs[name].hideModal();
        }
    },
    components: {
        modal: vueboot.modal
    }
});

//----------------------------------------------------------------------------------------------------------------------
