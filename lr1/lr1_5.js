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
function logFirstAvailable(workers = getAllworkers()) {
    console.log(`${workers.length}`);
    for (const worker of workers) {
        if (worker.available) {
            console.log(`${worker.Name + " " + worker.surname}`);
        }
    }
}
function getWorkersNamesByCategory(workers, category = Category.Designer) {
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
function getWorkerByID(id) {
    let worker = getAllworkers().find(w => w.id === id);
    return [worker.Name, worker.surname, worker.salary, worker.available];
}
function createCustomerID(name = "", id = -1) {
    return `name = ${name} id = ${id} `;
}
let IdGenerator = (id, name) => { return `id=${id} name = ${name}`; };
//1.5
function createCustomer(name, age, city) {
    console.log(`Name is ${name}`);
    if (age) {
        console.log(`Age = ${age}`);
    }
    if (city) {
        console.log(`City = ${city}`);
    }
}
console.log(`task 5`);
console.log("1 argument:");
createCustomer("Yuliia");
console.log("\n2 argument:");
createCustomer("Yuliia", 18);
console.log("\n3 argument:");
createCustomer("Yuliia", 18, "Kyiv");
//1.5.4
/*function checkoutWorkers(customer: string, workerIDs: number[]): void {
    for (const id of workerIDs) {
        console.log(getAllworkers().find(w => w.available === true && w.id === id))
    }
}*/
function checkoutWorkers(customer, ...workerIDs) {
    console.log(`\nCustomer ${customer}`);
    let result = [];
    for (const id of workerIDs) {
        let worker = getWorkerByID(id);
        if (worker[3])
            result.push((worker[0] + " " + worker[1] + " "));
    }
    return result;
}
const myWorkers = checkoutWorkers('Ann', 1, 3, 4);
myWorkers.forEach(element => {
    console.log(element);
});
//checkoutWorkers("customer", [1,3,4])
