import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(data => (
          <Item key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{data.label}</Label>
            <Percentage className="percentage">{data.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
