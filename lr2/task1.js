var Category;
(function (Category) {
    Category[Category["BUSINESS_ANALYST"] = 0] = "BUSINESS_ANALYST";
    Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
    Category[Category["DESIGNER"] = 2] = "DESIGNER";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(Category || (Category = {}));
function getAllWorkers() {
    return [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
    ];
}
function getWorkerById(id) {
    return getAllWorkers().find(worker => worker.id === id);
}
function PrintWorker(worker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}
PrintWorker(getWorkerById(1));
