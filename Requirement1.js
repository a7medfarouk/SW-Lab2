var items = [], transactions = [], categories = [], fields = {};

function chooseFunction(userInput,userObj)
{
    switch (userInput,userObj){ 
        case "add":
            addItem(userObj);
            break;
        case "edit":
            editItem(userObj);
            break;
        case "remove":
            removeItem(userObj);
            break;
        case "sale":
            saleRestockItem(userObj);
            break;
        case "restock":
            saleRestockItem(userObj);
            break;
        case "inventory":
            Inventory(userobj)
        default:
            console.log("choose function");
    }
}
function addItem(input)
{
    var item = 
    { 
        name: input[0], 
        category: input[1], 
        quantity: input[2], 
        price: input[3], 
        unit: input[4], 
        addedAt: new Date(), 
        customField: input[5] || {} 
    };

    item.push(item);
        
    if (!categories.includes(input[1])) 
        categories.push(input[1]);

    transactions.push({ type: "add", item });
}

function editItem(input)
{
    if (items[input[0]]) 
    {
        transactions.push({ type: "edit", old: items[input[0]], new: input.slice(1) }); //Adding transaction of type edit to the transaction array.
        items[input[0]] = { ...items[input[0]], name: input[1], category: input[2], quantity: input[3], price: input[4], unit: input[5], customField: input[6] || {} };
    } 
}

function removeItem(input)
{
    if (items[input[0]]) 
    {
        transactions.push({ type: "delete", item: items[input[0]] });//Adding a remove transaction to the transaction array
        items.splice(input[0], 1);
    }
        console.log("=== Dashboard ===\nItems: " + items.length + "\nTotal: $" + items.reduce((tot, x) => tot + x.quantity * x.price, 0).toFixed(2) + "\nCategories: " + categories.join(', '));
}

function saleRestockItem(input)
{
    for (let k of items) {
        if (k.name === input[0]) {
            if (k.quantity >= input[1]) 
                {
                    k.qty -= input[1];
                    transactions.push({ type: "sale", item: k, quantitySale: input[1], date: new Date() });//Adding a Sale requirement to the transaction array
                    console.log(`Sold ${input[1]} ${k.unit} of ${k.name}`);
                } 
                else 
                {
                    k.quantity += input[1];
                    transactions.push({ type: "restock", item: k, quantityRestock: input[1], date: new Date() });
                    console.log(`Restocked ${input[1]} ${k.unit} of ${k.name}`);
                }
            }
    }
}
function Inventory(userObj)
{
    switch(userObj[0]) {
        case "search":
            console.log(items.filter(x => [x.name, x.category, x.price].some(v => v.toString().toLowerCase().includes(userObj[1[0]].toLowerCase()))));
          break;
        case "viewInventory":
            console.log("=== Inv ===", items);
          break;
        case "exportAll":
            console.log("CSV:\n" + ["Name,Category,Quantity,Price,Unit,AddedAt"].concat(items.map(x => Object.values(x).join(','))).join('\n'));
          break;
        case "viewAllTransactions":
            console.log("Transactions:\n", transactions);
          break;
        case "viewInventoryAge":
            console.log(items.map(x => `${x.name}: ${Math.floor((new Date() - new Date(x.added)) / (1000 * 60 * 60 * 24))}d`).join('\n'));
          break;
        case "Import":
           userObj[1[0]].forEach(x => AddItem([x.name, x.category, x.quantity, x.price, x.unit]));
          break;
        case "addField":
            fields[userObj[1[0]]] = null;
          break;
        case "udCField":
            items.find(x => x.name === userObj[1[0]])?.customField[usrObj[1[1]]] = userObj[1[2]];
          break;
        default:
            console.log("Enter valid commands To access inventory");
      }
}