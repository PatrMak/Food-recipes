import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";

const RecipeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default RecipeCardSkeleton;
