var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    console.log(`${workers.length}`);
    for (const worker of workers) {
        if (worker.available) {
            console.log(`${worker.Name + " " + worker.surname}`);
        }
    }
}
function getWorkersNamesByCategory(category, workers) {
    let list = [];
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname + " " + worker.Name);
    }
    return list;
}
function logWorkersNames(mas) {
    mas.forEach(elem => console.log(elem));
}
console.log(`task 3: `);
//logWorkersNames(getWorkersNamesByCategory(Category.Developer, getAllworkers()))
//1.3
function getWorkerByID(id, workers) {
    let worker = workers.find(w => w.id === id);
    return `${worker.Name} ${worker.surname} gets ${worker.salary}`;
}
console.log(getWorkerByID(3, getAllworkers()));
