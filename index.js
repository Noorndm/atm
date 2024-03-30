import inquirer from "inquirer";
let mybalance = 10000; // dollar
let mypincode = 1;
console.log("----- Welcome To Noor ATM -----");
const pinAnswer = await inquirer.prompt([
    { name: "ID", message: "Enter your User ID:", type: "input" },
    {
        name: "pin",
        message: "Enter your PinCode:",
        type: "number",
    },
]);
if (pinAnswer.pin === mypincode) {
    console.log("Correct Pin Code!!!");
    let answer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option?",
            type: "list",
            choices: ["cash withdraw", "check balance"],
        },
    ]);
    if (answer.operation === "cash withdraw") {
        let myamount = await inquirer.prompt([
            {
                name: "transection",
                message: "Select your Transection type?",
                type: "list",
                choices: ["fast cash", "withdraw"],
            },
        ]);
        if (myamount.transection === "fast cash") {
            let transectiontype = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select the amount:",
                    type: "list",
                    choices: [1000, 1500, 2000, 3000, 5000],
                },
            ]);
            mybalance -= transectiontype.amount;
            if (transectiontype.amount <= mybalance) {
                console.log(`your remaining balance is: ${mybalance}`);
            }
            else {
                console.log(`Insufficient balance,\nPlease try again with lower amount!`);
            }
        }
        else if (myamount.transection === "withdraw") {
            let validamount = await inquirer.prompt([
                {
                    name: "amount2",
                    message: "Enter your amount:",
                    type: "number",
                },
            ]);
            mybalance -= validamount.amount2;
            if (validamount.amount2 <= mybalance) {
                console.log(`your remaining balance is: ${mybalance}`);
            }
            else {
                console.log(`Insufficient balance,\nPlease try again with lower amount!`);
            }
        }
    }
    else if (answer.operation === "check balance") {
        console.log(`your balance is: ${mybalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
