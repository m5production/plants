export function chooseOfficeLogic() {
    const chooseBtn = document.getElementById('city-shown-container');
    const foldUpBtn = chooseBtn.querySelector('.fold-up-btn');
    let isCityShown = false;
    let isUnfold = false;

    chooseBtn.addEventListener('click', onMouseClick);

    function onMouseClick(e) {

        if (isUnfold) {
            if (e.target === foldUpBtn) foldOptions();
            return;
        }

        isUnfold = true;
        unfoldOptions();
    }

    function unfoldOptions() {
        const citiesContainer = document.getElementById('cities-list-container');
        activate(
            citiesContainer,
            chooseBtn,
            foldUpBtn
        );

        setTimeout(() => document.body.addEventListener('click', onBodyClick), 0);
    }

    function foldOptions() {
        const citiesContainer = document.getElementById('cities-list-container');
        const localChooseBtn = isCityShown ? null : chooseBtn;

        deactivate(
            citiesContainer,
            localChooseBtn,
            foldUpBtn
        );

        document.body.removeEventListener('click', onBodyClick);
        isUnfold = false;
    }

    function onBodyClick(e) {
        const preventFold = e.target.closest('#cities-list-container')
            || e.target.closest('#city-shown-container');
        if (preventFold) return;
        foldOptions();
        document.body.removeEventListener('click', onBodyClick);
    }

    function activate(...args) {
        args.forEach(item => {
            if (item) item.classList.add('active');
        });

        const citiesList = document.getElementById('cities-list-container');
        citiesList.addEventListener('click', (e) => {
            const city = e.target.closest('.cities-list-item');
            showOfficeData(city);
        });
    }

    function deactivate(...args) {
        args.forEach(item => {
            if (item) item.classList.remove('active');
        });
    }

    function showOfficeData(cityElem) {
        isCityShown = true;

        const officeContactsData = {
            'Yonkers, NY': {
                name: 'Yonkers, NY',
                phone: '+19146780003',
                address: '511\sWarburton\sAve'
            },
    
            'Sherrill, NY': {
                name: 'Sherrill, NY',
                phone: '+13159080004',
                address: '14 WEST Noyes BLVD'
            },
    
            'Canandaigua, NY': {
                name: 'Canandaigua, NY',
                phone: '+15853930001',
                address: '151 Charlotte Street'
            },
    
            'New York City': {
                name: 'New York City',
                phone: '+12124560002',
                address: '9 East 91st Street'
            }
        };

        if (document.body.clientWidth <= 380)
            document.getElementById('contacts-woman-img')
                .style.display = 'none';

        const officeInfo = document.getElementById('office-details');
        const officeCity = document.getElementById('office-city-name');
        const officePhone = document.getElementById('office-phone');
        const officeAddress = document.getElementById('office-address');
        const officePhoneLink = document.getElementById('office-phone-link');
        const office = officeContactsData[cityElem.innerHTML];
        const phoneNum = office.phone;

        document.getElementById('city-shown-name').innerHTML = office.name;

        officeInfo.style.visibility = 'visible';

        officeCity.innerHTML = office.name;

        officePhone.innerHTML =
            phoneNum.slice(0, 2) + '\t' +
            phoneNum.slice(2, 5) + '\t' +
            phoneNum.slice(5, 8) + '\t' +
            phoneNum.slice(8);

        officeAddress.innerHTML = office.address;

        officePhoneLink.href = "tel:" + phoneNum;
        foldOptions();
    }
}