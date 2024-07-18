import React from 'react'
import renderer from 'react-test-renderer'
import { LabelFormControl } from '../components/form/LabelFormControl'

test('renders correctly', () => {
    const tree = renderer.create(<LabelFormControl />).toJSON()
    expect(tree).toMatchSnapshot()
})
