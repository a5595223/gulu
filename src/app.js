import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input'
import Row from './row'
import Col from './col'

const expect = chai.expect

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
chai.use(spies)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: ''
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)

        }
    }
})





