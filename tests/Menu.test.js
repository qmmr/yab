import Menu from '../src/components/Menu'

describe('<Menu />', () => {
    it('should render', () => {
        const wrapper = shallow(<Menu />)

        console.log('\n\n\n');
        console.log('wrapper.debug()');
        console.log(wrapper.debug())
        console.log('\n\n\n');

        // console.log(document.querySelector('style'));
        var container = document.createElement('section');
        container.id = 'app';
        container.classList.add('app');
        var body = document.querySelector('body');
        body.appendChild(container);
        ReactDOM.render(<Menu />, container);
        console.log(document.querySelector('section'));

        expect(wrapper.find('ul')).to.have.length(1)
        // expect(wrapper.find('.menu')).to.have.length(1)
    });
});
