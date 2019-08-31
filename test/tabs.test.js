const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import TabsBody from '../src/tabs-body'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-body', TabsBody)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('子组件只能是 tabs-head 和 tabs-body', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="finance">
         <g-tabs-head>  
            <g-tabs-item name='woman'>
                美女
            </g-tabs-item>
            <g-tabs-item name='finance'>财经</g-tabs-item>
            <g-tabs-item name='sports'>体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name='woman'>美女相关资讯</g-tabs-pane>
            <g-tabs-pane name='finance'>财经相关资讯</g-tabs-pane>
            <g-tabs-pane name='sports'>体育相关资讯</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
    it('可以接受 direction prop', () => { })
    // describe('props', function () {
    //     it('接受 autoClose', () => {
    //         let div = document.createElement('div')
    //         document.body.appendChild(div)
    //         const Constructor = Vue.extend(Toast)
    //         const vm = new Constructor({
    //             propsData: {
    //                 autoClose: 1,
    //             }
    //         }).$mount(div)
    //         vm.$on('close', () => {
    //             expect(document.body.contains(vm.$el)).to.eq(false)

    //         })
    //     })

    // })


})