import { AddClass, RemoveClass, HasClass } from "mgn-utility"

const Ani = () => {

    const targets = Array.from ( document.querySelectorAll('.j-ani') );
    const markers = Array.from ( document.querySelectorAll('.j-marker-solo'));


    if ( !targets.length ) {
        return;
    }


    if ( !window.IntersectionObserver ) {

        // InterSectionObserver未対応ブラウザ
        const getScrollTop = () => {
            return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        }

        window.addEventListener('load', () => {

            const TARGET_POSITION = target.getBoundingClientRect().bottom;

            const handleScroll = (e) => {

                if ( getScrollTop() > TARGET_POSITION ) {
                    if ( !HasClass( $button, 'on') ) {
                        AddClass( $button, 'on');
                    }
                    return;
                }

                if ( HasClass( $button, 'on') ) {
                    RemoveClass( $button, 'on');
                }   

            }

            window.addEventListener('scroll', handleScroll, false);

        });

        return;
    }


    const callback = (entries) => {
        entries.forEach(entry => {
            
            if ( entry.isIntersecting ) {

                if ( !HasClass( entry.target, 'on') ) {
                    AddClass( entry.target, 'on');

                    observer.unobserve(entry.target);
                }
                return;
            }

          });
    }
    const observer = new IntersectionObserver(callback, {
        threshold: [ 0.3 ]
    });

    targets.forEach( target => observer.observe(target) );
    markers.forEach( marker => observer.observe(marker));

}

export default Ani;