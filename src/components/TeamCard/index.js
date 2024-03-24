// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each

  return (
    <Link to={`/team-matches/${id}`} className="linkContainer" key={id}>
      <li className="eachThumbnailContainer">
        <img src={teamImageUrl} className="thumbnailImage" alt={name} />
        <p className="thumbnailTitle">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
