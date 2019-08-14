import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './g-button-group'
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input'

const expect = chai.expect

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
chai.use(spies)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})


{
    const constructor = Vue.extend(Button)
    const vm = new constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
}
{
    const constructor = Vue.extend(Button)
    const vm = new constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }

    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
    const div = document.createElement(div)
    document.body.appendChild(div)
    const constructor = Vue.extend(Button)
    const vm = new constructor({
        propsData: {
            icon: 'setting'

        }

    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    expect(getComputedStyle(svg).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const constructor = Vue.extend(Button)
    const vm = new constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'

        }

    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    expect(getComputedStyle(svg).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()

}
{
    //mock

    const constructor = Vue.extend(Button)
    const vm = new constructor({
        propsData: {
            icon: 'setting'


        }

    })
    //点击按钮函数被触发
    vm.$mount()
    let spy = chai.spy(function () { })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

}


