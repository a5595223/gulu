const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {

        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        });

        it('接收 value', () => {

            vm = new Constructor({
                propsData: {
                    value: '123456'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123456')

        })
        it('接收 disabled', () => {

            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)

        })
        it('接收 readonly', () => {

            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)

        })
        it('接收 error', () => {

            vm = new Constructor({
                propsData: {
                    error: '哈哈哈'
                }
            }).$mount()
            const useElements = vm.$el.querySelector('use')
            expect(useElements.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('哈哈哈')

        })
    })
    describe('event', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        });

        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();


                vm.$on(eventName, callback)
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', { value: { value: 'hi' }, enumerable: true })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            }))

        })
        // it('支持 input 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();


        //     vm.$on('input', callback)
        //     let event = new Event('input');
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 focus 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();


        //     vm.$on('focus', callback)
        //     let event = new Event('focus');
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 blur 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();


        //     vm.$on('blur', callback)
        //     let event = new Event('blur');
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})