

export async function getItems(type) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/${type}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteItem(type, id) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/${type}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
