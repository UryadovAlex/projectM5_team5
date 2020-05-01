const URL = 'https://5e8da89e22d8cd0016a798db.mockapi.io/users/5';


//------------------------------------- USER ----------------------------------------------
// user details
export const getUserDetails = async () => {
    return await fetch(URL)
        .then(data => data.json());
}
// update user details
export const updateUserDetails = balance => {
    const data = {
        name: 'Team Five',
        currentBalance: balance
    }
    fetch(URL, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

//---------------------------------------------- USER STOCKS -----------------------------------------
// get all users stocks
export const getAllUsersStocks = async () => {
    return await fetch(`${URL}/stocks`)
        .then(data => data.json());
}

// add users stock
export const addUsersStock = stock => {
    fetch(`${URL}/stocks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stock)
    })
}

// update user stocks by id
export const updateUsersStock = (id ,stock) => {
    fetch(`${URL}/stocks/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stock)
    })
}

//delete by id
export const deleteUsersStock = id => {
    fetch(`${URL}/stocks/${id}`, {
        method: "DELETE",
    })
}

// ------------------------------------------- MARKET STOCKS --------------------------------------------
// get all stocks from server
export const getAllStocks = async () => {
    return  await fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
        .then(data => data.json());
}





