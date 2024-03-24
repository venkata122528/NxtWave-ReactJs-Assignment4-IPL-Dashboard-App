// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedMatchDetails

  return (
    <div className="matchDetailsContainer">
      <div className="firstContainer">
        <p className="teamName">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="stadiumName">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="competingTeamLogo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="secondContainer">
        <p className="firstInningsTitle">First Innings</p>
        <p className="firstInningsTeam">{firstInnings}</p>
        <p className="secondInningsTitle">Second Innings</p>
        <p className="secondInningsTeam">{secondInnings}</p>
        <p className="manOfTheMatch">Man Of The Match</p>
        <p className="manOfTheMatchPName">{manOfTheMatch}</p>
        <p className="umpiresTitle">Umpires</p>
        <p className="umpiresNames">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
