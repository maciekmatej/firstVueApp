let vm = Vue.createApp({
    data() {
        return {
            perspective: 200,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            copy: {}
            
        }
    },
    methods: {
        resetBtn() {
            console.log('was called')
            this.perspective = 200;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copyBtn() {
            const checkIcon = document.querySelector('#check_icon');
            const el = document.createElement('textarea');
            el.setAttribute('readonly', '')
            el.value = `transform: ${this.box_styles.transform};`;
            document.body.append(el)
            el.select()
            document.execCommand('copy')
            el.remove()
            checkIcon.style.opacity = "1";
            checkIcon.style.left = "120%"
            setTimeout(() => {
                 checkIcon.style.opacity = "0";
                 checkIcon.style.left = "100%"; 
               }, 2000);
        }
        
        
    },
    computed: {
        box_styles(){
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)`
            }
        }
    }
}).mount("#app") 