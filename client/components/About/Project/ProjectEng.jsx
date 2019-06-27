import React, { Component } from "react";

class ProjectEng extends Component {
  render() {
    return (
      <div>
        <h1 className="aboutHeading2">Project</h1>
        <div className="aboutBodyContainer">
          <p className="aboutBody">
          The idea of the Te Kaupapa Rāhuitia grew out of a conversation, after the recent rāhui placed over the Waitakere ranges by Te Kawerau ā Maki to help counter the spread of kauri dieback. Our group was left wondering why it took so long for Waitakere city council to recognise the urgency and wisdom of this recommendation and enforce the rāhui that was laid down by the mana whenua of the region. 
          </p>
          <p className="aboutBody">
          For us it boiled down to the fact that Councils and Government institutions will often ignore issues, either big or small, until they become visible or impossible to ignore or too inconvenient. By finding ways of building support behind movements such as the rāhui placed down by Te Kawerau ā Maki we believe we can change the hearts and minds of individuals and communities that occupy or use these land/seascapes and the resources they hold. Secondly by doing this we have the opportunity to shape the decisions and actions of the people (council, government, corporations) that have the power to govern public land and resources while also bringing mana to te ao māori. By raising awareness around the tikanga of rāhui we can also begin to realise the importance of the custom in the modern world, especially when considering how we can take care of the environment and resources while also respecting the wisdom and knowledge of tangata whenua.
          </p>
          <p className="aboutBody">
          Our idea was to develop a web application where a user can register and create a profile. The user can enter information relating to their whakapapa and contact details. Once a user is authenticated they are then free to add a rāhui within the database and display this on the map of Aotearoa/New Zealand. The act of ‘placing’ the rāhui can be on behalf of their iwi, hapū, themselves or someone else. If this applies to someone other than themselves, it is recommended that all the necessary information be input. The idea is the user can communicate what areas to be mindful and respectful toward by drawing and defining the exact territory the rāhui applies to on the map. This as well as the description and details of the rāhui is then saved into a database and displayed on the map of Aotearoa/New Zealand so that other users of the app can then have access to this information.
          </p>
          <p className="aboutBody">
          The intent of the Rāhuitia project is to strengthen and bring mana to the tikanga of rāhui. We understand that the authority of a given rāhui comes from the mana of the person, whānau, hapu or iwi that places it. By creating an app where mapping and communicating rāhui is possible we can locate the custom in the present and give mana and power back to individuals, whānau, hapu and iwi groups. 
          </p>
          <p className="aboutBody">
          After developing the foundations of the project, we were left with many questions around certain aspects and features of our application. The most central question was, what does it mean to store the aforementioned information relating to rāhui? And can this knowledge be considered a form of taonga? If so how can we actively work to protect the sovereignty of this knowledge and data so that we have the full confidence of users? Our aspiration is that the all information be stored and hosted within Aotearoa/New Zealand so that it is not subject to foreign privacy laws and regulations. 
          </p>
          <p className="aboutBody">
          Lastly, after developing the app we were made aware of the complexities of representing and embodying tikanga specific to te ao Māori within a web application. How can the relationships between individuals, whanau, hapu and iwi be represented and respected within the interface of our application. We see the way forward to be developing the app through a process of sustained conversation and listening to individuals and representatives that have the knowledge, mana and potential to use the application.
          </p>
        </div>
        <div className="spaceme2"></div>
      </div >

    );
  }
}

export default ProjectEng;