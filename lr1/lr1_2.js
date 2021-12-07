var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    console.log("" + workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log("" + (worker.Name + " " + worker.surname));
        }
    }
}
// 1.2
function getWorkersNamesByCategory(category, workers) {
    var list = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.category === category)
            list.push(worker.surname);
    }
    return list;
}
function logWorkersNames(mas) {
    for (var _i = 0, mas_1 = mas; _i < mas_1.length; _i++) {
        var m = mas_1[_i];
        console.log("" + m);
    }
}
console.log("task 2: ");
logWorkersNames(getWorkersNamesByCategory(Category.Designer, getAllworkers()));
