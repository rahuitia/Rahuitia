import React, { Component } from "react";

class LandReo extends Component {

  handleclick = () => {
    window.location = `/#/explore`;
  }

  render() {
    return (
      <div >
        <div>
          <div className="landingtext">
            <div className="title">Te Kaupapa Rāhuiatia</div>
            <p className="pMain">
              Ko tēnei mea te Rāhui he ritenga whai mana e whakamahia ana ki te aukati i te whakamahinga o ngā rawa o te taiao mō tētahi wā.  Uruhina ai hoki i ngā tangihanga. Nā te tapu o tēnei mea te mate ka whakapokea te whenua, te wai, me te tangata. Ina takahia te Tapu, ka whakatakotoria he Rāhui hei whakahoki mai i te taurite kia noa ai anō. Ka uruhina pea he Rāhui ki ngā ngahere, ngā mahinga kai, ngā wāhi kohi kai, ngā awa, ngā roto, te moana hoki. He whānui ngā take mō te whakatakoto i tētehi Rāhui, pēnei i te kokoraho, te tiaki i te wāhi i mate ai tētahi i nā noa nei, te hiahia rānei hei whakaora anō i ngā puna kai, i ngā rawa rānei i tētehi takiwā, hei ārai rānei i te horapa o tētehi mate mau noa. E ahu mai ana te mana o te Rāhui i te Mana o te tangata, te rōpū rānei e uruhi ana i te Rāhui. Nā reira, mā te whai Mana Whenua anake ka taea tētahi Rāhui te uruhi.
          </p>
            <br></br>
            <button className="exploreButton" onClick={this.handleclick}>Te Tūhura Mahere</button>
            <br></br>
          </div>

        </div>
      </div>
    )
  }
}

export default LandReo