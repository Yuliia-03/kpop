enum Category {

    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master

}

function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ]
    return workers;
}

function logFirstAvailable(workers: {
    Name: string, surname: string, available: boolean, salary: number
}[]): void {
    console.log(`${workers.length}`)
    for (const worker of workers) {
        if (worker.available) {
            console.log(`${worker.Name + " " + worker.surname}`)
        }
    }
}


function getWorkersNamesByCategory(category: Category, workers: {
    Name: string, surname: string, available: boolean, salary: number, category: Category
}[]): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname + " " + worker.Name)

    }
    return list
}

function logWorkersNames(mas: string[]): void {
    mas.forEach(elem => console.log(elem))
}

function getWorkerByID(id: number, workers: {
    id: number,
    Name: string,
    surname: string,
    available: boolean,
    salary: number
    category: Category
}[]): string {

    let worker = workers.find(w => w.id === id);
    return `${worker.Name} gets ${worker.salary}$`
}

// 1.4

function createCustomerID(name: string = "", id: number = -1): string {
    return `Name: ${name} Id: ${id}`
}



console.log(`task 4: `)
const myID: string = createCustomerID("Yuliia", 10)
console.log(myID)


let IdGenerator: typeof createCustomerID = (id, name) => { return `Name: ${name} Id: ${id}` }



IdGenerator = createCustomerID
//console.log(IdGenerator())
console.log(IdGenerator('Yuliia', 20))

