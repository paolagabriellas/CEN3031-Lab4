import React from "react";

/**
 * 
 * @param {*} props 
 * 
 * In this component, you would complete the editFootballClub function
 * If you need help, check out how the deleteFootballClub function is implemented
 */

const FootballClubLists = (props) => {

  const deleteFootballClub = (id) =>{
    props.setDelFootballClub({
      visible : true,
      id : id,
    });
  }

  const editFootballClub = (id) => {

  }

  const viewFootballClubData = (id) => {
    
  };
  
  const buildingList =
    props.filteredClubs.length === 0
      ? props.data.map((footballClub) => {
          return (
            <tr key={footballClub.id}>
              <td data-label="School">{footballClub.school} </td>
              <td data-label="Mascot"> {footballClub.mascot} </td>
              <td onClick={() => editFootballClub(footballClub.id)}>
                <i class="edit icon"></i>
              </td>
              <td onClick={() => deleteFootballClub(footballClub.id)}>
                <i class="trash alternate icon"></i>
              </td>
            </tr>
          );
        })
      : props.filteredClubs.map((footballClub) => {
          return (
            <tr key={footballClub.id}>
              <td data-label="School">{footballClub.school} </td>
              <td data-label="Mascot"> {footballClub.mascot} </td>
              <td onClick={() => editFootballClub(footballClub.id)}>
                <i class="edit icon"></i>
              </td>
              <td onClick={() => deleteFootballClub(footballClub.id)}>
                <i class="trash alternate icon"></i>
              </td>
            </tr>
          );
        });

  return <tbody>{buildingList}</tbody>;
};
export default FootballClubLists;
