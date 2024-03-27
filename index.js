const drivers = [     'Wilfred',    'Pauline',     'Javier',      'Joshua',  ];

function findMatching(drivers, string) {
    return drivers.filter(driver =>
        driver.toUpperCase() === string.toUpperCase()
    );
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
    );
}

function matchName(drivers, name) {
    return drivers.filter(drivers =>
        drivers.name.toLowerCase() === name.toLowerCase()
    );
}

