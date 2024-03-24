// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsThumbnailData()
  }

  getTeamsThumbnailData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const gottenData = await response.json()
    const {teams} = gottenData
    const updatedTeamsData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <ul className="homeContainer">
        <div className="mainTitleContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="iplLogoImage"
            alt="ipl logo"
          />
          <h1 className="mainTitle">IPL Dashboard</h1>
        </div>
        <ul className="thumbnailsContainer">
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(each => <TeamCard each={each} key={each.id} />)
          )}
        </ul>
      </ul>
    )
  }
}

export default Home
