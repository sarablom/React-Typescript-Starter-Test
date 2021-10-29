export async function getDishes() {
  const response = await fetch(`http://localhost:3000/dishes/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export async function getSports() {
  //const abortController = new AbortController();
  const response = await fetch(
    `http://localhost:3000/sports/`,
    //{ signal: abortController.signal },
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function deleteDish(id) {
  const response = await fetch(`http://localhost:3000/dishes/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

export async function deleteSport(id) {
  const response = await fetch(`http://localhost:3000/sports/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
