new Vue({ 
    el: '#carousel',
    render(h) {
        return h('a');
    },
    data() {
        return {
            data: [
                '<div class="example-slide">Slide 1</div>',
                '<div class="example-slide">Slide 2</div>',
                '<div class="example-slide">Slide 3</div>',
            ],
        };
    },
})

console.log('wee');