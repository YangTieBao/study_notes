Vue.component("swiperItem",{
    template:`
    <div class="swiper-slide">
        <slot></slot>    
    </div>
    `
})
Vue.component('swiper',{
    props:{
        loop:{
            type:String,
            default:true
        }
    },
    template:
    `
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    `,
    mounted(){
        console.log('mounted')
        new Swiper(".swiper-container",{
            pagination:{
                 el:".swiper-pagination"
            },
            loop:this.loop,
            autoplay:{
                delay:2500,
                disableOnInteraction:false
            },
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
            }
        })
    },
    destroyed(){
        console.log("destroyed")
    }
})