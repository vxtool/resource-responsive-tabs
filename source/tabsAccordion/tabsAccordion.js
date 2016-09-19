import './tabsAccordion.scss';

class tabsAccordion {
  constructor( options ) {
    const config = {
      container    : '.tabs_accordion',
      itemsNav     : '.tabs_accordion-title',
      itemsContent : '.tabs_accordion-content',
      activeClass : 'on'
    };
    const options = options || config;
    let heightContainer = 0;

    document.querySelectorAll( options.itemsContent ).forEach(function(index, element){
      element.style.position = 'relative';
      if( index === 0 ){
        heightContainer = element.innerHeight() + 20;
      }
      element.removeAttr('style');
      element.classList.add('hide');
    });

    document.querySelector( container ).style.minHeight = heightContainer;

    document.querySelector( itemsNav ).classList.add( options.activeClass );
    document.querySelector( itemsContent ).classList.add('show');

    document.querySelectorAll( options.itemsContent ).forEach(function(index, element){
      element.addEventListener('click', function(event){
        event.preventDefault();

        // if( !$(this).hasClass( opcoes.classe_abas )){
        //   $( opcoes.link_abas ).removeClass( opcoes.classe_abas );
        //   $( opcoes.conteudo_abas ).removeClass( 'show' );

        //   $('.tabs_accordion').css('min-height', $(this).next( opcoes.conteudo_abas ).height() + 20 );

        //   $(this).addClass( opcoes.classe_abas );
        //   $(this).next( opcoes.conteudo_abas ).addClass( 'show' );
        // }
      });
    });

    console.log('alert');
  }
}

export default tabsAccordion;
