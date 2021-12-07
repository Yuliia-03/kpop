var Category;
(function (Category) {
    Category[Category["BUSINESS_ANALYST"] = 0] = "BUSINESS_ANALYST";
    Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
    Category[Category["DESIGNER"] = 2] = "DESIGNER";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(Category || (Category = {}));
const logPrize = (prize) => console.log(prize);
logPrize("Prize");
