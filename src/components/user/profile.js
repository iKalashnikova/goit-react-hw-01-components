import PropTypes from 'prop-types';
import { User, Description, Avatar, Name, Tag, Location, Stats, StatsList, Label, Quantity} from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<User>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsList>
        <Label >Followers</Label>
        <Quantity>{Number(stats.followers)}</Quantity>
      </StatsList>
      <StatsList>
      <Label >Followers</Label>
        <Quantity>{Number(stats.views)}</Quantity>
      </StatsList>
      <StatsList>
        <Label>Likes</Label>
        <Quantity>{Number(stats.likes)}</Quantity>
      </StatsList>
    </Stats>
  </User>
    
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};


