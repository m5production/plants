export function serviceFilterLogic() {

    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.gallery-item');
    let activeFilterCtr = 0;
    
    filterBtns.forEach(btn =>
        btn.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');

            const isActive = btn.classList.contains('filter-btn-active');
            
            if(activeFilterCtr === 2 && !isActive) return;
            
            return isActive
                ? deActivate(btn)
                : activate(btn);
        })
    );

    function activate(btn) {
        if (activeFilterCtr === 0) cards.forEach(card =>
            card.classList.add('blurred')
        );

        activeFilterCtr++;

        btn.classList.add('filter-btn-active');

        const cardClassPrefix = btn.id.slice(7) + '-card';

        cards.forEach(card => {
            if ((card.classList.contains(cardClassPrefix)))
                card.classList.remove('blurred');
        });
    }

    function deActivate(btn) {

        btn.classList.remove('filter-btn-active');

        activeFilterCtr--;

        if (activeFilterCtr === 0) {
            cards.forEach(card => card.classList.remove('blurred'));
            return;
        }

        const cardClassPrefix = btn.id.slice(7) + '-card';

        cards.forEach(card => {
            if ((card.classList.contains(cardClassPrefix)))
                card.classList.add('blurred');
        });
    }
}

