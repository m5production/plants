export function priceRatesLogic() {
    const priceOpts = document.querySelectorAll('.rate-option-label');
    const optionDetails = document.getElementById('rate-option-details');
    const rateCostField = document.getElementById('rate-cost-field');
    let unfoldedOption = null;
    let foldUpBtn = null;

    priceOpts.forEach(opt =>
        opt.addEventListener('click', onMouseClick)
    )

    function onMouseClick(e) {
        const option = e.target.closest('.rate-option-label');

        if(e.target === foldUpBtn){
            foldOption(option);
            return;
        }

        if(option === unfoldedOption) return;
        
        
        if (unfoldedOption) foldOption(unfoldedOption);
        
        unfoldedOption = option;
        
        unfoldOption(option);
    }

    function unfoldOption(opt) {
        foldUpBtn = opt.querySelector('.fold-up-btn')
        foldUpBtn.classList.add('active');

        opt.classList.add('rate-option-label-active');

        rateCostField.innerHTML = opt.dataset.rateCost;
        optionDetails.style.display = 'block';
        opt.append(optionDetails);
    }

    function foldOption(opt) {
        opt.classList.remove('rate-option-label-active');
        
        optionDetails.style.display = 'none';

        foldUpBtn.classList.remove('active');

        unfoldedOption = null;
        foldUpBtn = null;
    }
}