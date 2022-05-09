const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api'

  
  export const testAuthentication = async (token) => {
    const url = `${baseUrl}/users/me`;
    const response = await fetch(url, {
    
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const json = await response.json();
    if (json) {
        console.log(json)
      return json;
    } else {
      alert(`${json.error}`)
    }
  }
  
  
  
  export const registerUser = async (userObject) => {
    console.log("USEROBJECT", userObject)
    const url = `${baseUrl}/users/register`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    });
    const json = await response.json();
    console.log("USERJSON", json)
    if (json.token) {
      return json.token;
    } else {
      alert(`${json.error}`);
    }
  };
  
  
  export const loginAsUser = async (userObject) => {
    const url = `${baseUrl}/users/login`;
    console.log(userObject)
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject),
    });
    const json = await response.json();
    if (json) {
      localStorage.setItem('access_token', json.token);
      console.log(json.token)
      return json.token;
    } else {
      alert(`${json.error}`)
    }
  }
  
  
  
  export const getUserData = async () => {
    const url = `${baseUrl}/users/me`;
  
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      }
    });
    const json = await response.json();
    if (json) {
      return json.data;
    } else {
      alert(`${json.error}`)
    }
  }

  export const getAllActivities = async () => {
      const url = `${baseUrl}/activities`;

      const response = await fetch(url, {
          headers: {
              'Content-Type': 'application/json',
          }
      });
      const json = await response.json();
      if(json) {
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const createNewActivities = async (newActivity) => {
      const url = `${baseUrl}/activities`;

      const response = await fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`
          },
          body: JSON.stringify(newActivity)
      });
      const json = await response.json();
      if(json) {
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const updateActivityById = async (updatedActivity ,id) => {
      const url = `${baseUrl}/activities/${id}`;

      const response = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify({updatedActivity})
      });
      const json = await response.json();
      if(json) {
          return json
      } else {
          alert(`${json.error}`)
      }
  }
  
  export const getActivitiesRoutinesById = async (id) => {
      const url = `${baseUrl}/activities/${id}/routines`;

      const response = await fetch(url, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const json = await response.json();
      if(json){
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const getAllRoutines = async () => {
      const url = `${baseUrl}/routines`;

      const response = await fetch(url, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const json = await response.json();
      console.log("GETALLROUTINES", json)
      if(json){
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const createNewRoutine = async (newRoutine) => {
      const url = `${baseUrl}/routines`;

      const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
          },
          body: JSON.stringify({ newRoutine })
      });
      const json = await response.json();
      if(json){
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const updateRoutineById = async (updateRoutine ,id) => {
      const url = `${baseUrl}/routines/${id}`

      const response = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify({updateRoutine})
      })

      const json = await response.json();
      if(json){
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const deleteRoutine = async (id) => {
      const url = `${baseUrl}/routines/${id}`

      const response = await fetch(url, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`
          }
      });

      const json = await response.json();
      if(json){
          return json
      } else {
          alert(`${json.error}`)
      }
  }

  export const attachActivity = async (routine, activity, id) => {
      const url = `${baseUrl}/routines/${id}/actvities`

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                routine, activity

            })
        }) 
        const json = await response.json();
        if(json) {
            return json
        } else {
            alert(`${json.error}`)
        }
  }

  export const updateActivityCountorDuration = async (id) => {
      const url =`${baseUrl}/api/routine_activities/${id}`

      const response = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify({

          })
          
      })
      const json = await response.json();
      if(json) {
          return json
      } else {
          alert(`${json.error}`)
      }
  }