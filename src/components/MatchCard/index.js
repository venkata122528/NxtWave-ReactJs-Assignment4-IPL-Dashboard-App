// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props

  const neededFormatData = {
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  }

  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = neededFormatData

  let resultStatusClassName

  if (matchStatus === 'Won') {
    resultStatusClassName = 'won'
  } else {
    resultStatusClassName = 'lost'
  }

  return (
    <li className="matchCardItemContainer">
      <img
        src={competingTeamLogo}
        className="teamLogoImage"
        alt={`competing team ${competingTeam}`}
      />
      <p className="teamName">{competingTeam}</p>
      <p className="resultTitle">{result}</p>
      <p className={resultStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
