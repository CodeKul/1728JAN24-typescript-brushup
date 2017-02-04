export class Coffee {
    type = {
        smell: 'Good',
        isCold: () => console.log(`its not`)
    };

    cities = [
        'Pune',
        'Sangli',
        'Kolhapur',
        'Nagpur'
    ];

    showMeCities() {
        this.cities.forEach(city => console.log(`City is ${city}`));
    }

    functionalCoffee() {
        let future = new Promise((resolve, reject) => {
            resolve(() => {
                setTimeout(() => {}, 1500);
            });
        });
    }
}