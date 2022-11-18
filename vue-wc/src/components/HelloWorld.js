import { defineCustomElement } from 'vue'
import HelloWorld from './HelloWorld.ce.vue'



const MyVueElement = defineCustomElement(HelloWorld)

export { MyVueElement }

export function register() {
    customElements.define('my-vue-element', MyVueElement)
}