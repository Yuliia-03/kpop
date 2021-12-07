enum Category {

    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master

}

function getAllworkers() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer  },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer  },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA  }
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

// 1.2

function getWorkersNamesByCategory(category: Category, workers: {
    Name: string, surname: string, available: boolean, salary: number, category: Category
}[]): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname)

    }
    return list
}

function logWorkersNames(mas: string[]): void {
    for (let m of mas) {
        console.log(`${m}`)
    }
}

let sum = (x: number, y: number) =>  x + y;

console.log(`task 2: `)
logWorkersNames(getWorkersNamesByCategory(Category.Designer, getAllworkers()))
