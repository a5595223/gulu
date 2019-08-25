import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'

const expect = chai.expect

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)
Vue.use(plugin)
chai.use(spies)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: ''
    },
    created() {


    },
    methods: {
        showToast1() { this.showToast('top') },
        showToast2() { this.showToast('middle') },
        showToast3() { this.showToast('bottom') },
        showToast(position) {
            this.$toast('你好', {
                position,
                enableHtml: false,
                closeButton: {
                    text: '知道啦',
                    callback() {
                        console.log('用户说他知道啦')
                    }
                },
                autoClose: 3,
            })
        }
    }
})





