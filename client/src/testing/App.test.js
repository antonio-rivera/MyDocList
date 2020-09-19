import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('Main app component that connects all components', () => {
    it('should render correctly', () => {
        const component = shallow(<App/>)

        expect(component).toMatchSnapshot()
    })
})
