import './tabsAccordion.scss';

class tabsAccordion {
  constructor( options ) {
    const config = {
      link      : '.tabs_accordion-title',
      content   : '.tabs_accordion-content',
      itemClass : 'on'
    };
    const options = options || config;

    console.log('alert');
  }
}

export default tabsAccordion;
