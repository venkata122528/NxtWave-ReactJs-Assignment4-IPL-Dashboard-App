// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
    bgClassName: '',
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()
    const updatedTeamData = {
      latestMatchDetails: teamData.latest_match_details,
      recentMatches: teamData.recent_matches,
      teamBannerUrl: teamData.team_banner_url,
    }

    let backgroundClassName
    if (id === 'RCB') {
      backgroundClassName = 'rcbTeamDataContainer'
    } else if (id === 'KKR') {
      backgroundClassName = 'kkrTeamDataContainer'
    } else if (id === 'KXP') {
      backgroundClassName = 'kxpTeamDataContainer'
    } else if (id === 'CSK') {
      backgroundClassName = 'cskTeamDataContainer'
    } else if (id === 'RR') {
      backgroundClassName = 'rrTeamDataContainer'
    } else if (id === 'MI') {
      backgroundClassName = 'miTeamDataContainer'
    } else if (id === 'SH') {
      backgroundClassName = 'shTeamDataContainer'
    } else if (id === 'DC') {
      backgroundClassName = 'dcTeamDataContainer'
    }

    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedTeamData

    this.setState({
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading: false,
      bgClassName: backgroundClassName,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
      bgClassName,
    } = this.state

    return (
      <div className={bgClassName}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              className="teamBannerImage"
              alt="team banner"
            />
            <h1 className="latestMatchesTitle">Latest Match</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recentMatchesDataContainer">
              {recentMatches.map(each => (
                <MatchCard each={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
