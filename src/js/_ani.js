import { AddClass, RemoveClass, HasClass } from "mgn-utility"

const Ani = () => {

    const targets = Array.from ( document.querySelectorAll('.j-ani') );
    const markers = Array.from ( document.querySelectorAll('.j-marker-solo'));


    if ( !targets.length ) {
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

    targets.forEach( target => observer.observe(target));
    markers.forEach( marker => observer.observe(marker));

}

export default Ani;