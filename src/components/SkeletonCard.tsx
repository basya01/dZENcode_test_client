import { Card } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

interface SkeletonCardProps {
  width: number | string;
  height: number | string;
}

const CardSkeleton: React.FC<SkeletonCardProps> = ({ width, height }) => (
  <Card>
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  </Card>
);

export default CardSkeleton;
