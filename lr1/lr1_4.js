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
function getWorkerByID(id, workers) {
    let worker = workers.find(w => w.id === id);
    return `${worker.Name} gets ${worker.salary}$`;
}
// 1.4
function createCustomerID(name = "", id = -1) {
    return `Name: ${name} Id: ${id}`;
}
console.log(`task 4: `);
const myID = createCustomerID("Yuliia", 10);
console.log(myID);
let IdGenerator = (id, name) => { return `Name: ${name} Id: ${id}`; };
IdGenerator = createCustomerID;
//console.log(IdGenerator())
console.log(IdGenerator('Yuliia', 20));
