import React from 'react';
import {shallow, configure} from 'enzyme';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("Header", function(){
    let mountedHeader;
    beforeEach(()=>{
        mountedHeader = shallow(<Header />);
    });

it('render without crashing', function() {
    const mountedHeader = shallow(<Header />);
    expect(mountedHeader.length).toBeGreaterThan(0);
});

/*it('renders a string', function() {
    const quote = mountQuote.find('h2').text();
    expect(quote.length).toBeGreaterThan(0);
}); */

})