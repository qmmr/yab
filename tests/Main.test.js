import Menu from '../src/components/Menu'

describe('<Menu />', () => {
	it('should render', () => {
		const wrapper = shallow(<Menu />)

        console.log(wrapper.debug())

		expect(wrapper.find('ul')).to.have.length(1)
		expect(wrapper.find('.menu')).to.have.length(1)
	});
});
